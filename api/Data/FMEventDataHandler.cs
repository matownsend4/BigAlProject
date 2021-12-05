using api.Interfaces;
using api.Model;
using System.Collections.Generic;
using System.Dynamic;

namespace api.Data
{
    public class FMEventDataHandler : IFMEventDataHandler
    {
      private Database db;
        public FMEventDataHandler()
        {
            db = new Database();
        }
        public void Delete(FMEvent fMEvent)
        {
            string sql = "UPDATE farmers_market_event SET deleted = 'Y' WHERE fm_event_id = @fmeventid";
            var values = GetValues(fMEvent);
            db.Open();
            db.Update(sql, values);
            db.Close();
        }

        public void Insert(FMEvent fMEvent)
        {
            string sql = "INSERT INTO farmers_market_event(fm_event_id, fm_date) VALUES(@fMEventId, @fMDate)";
 
            var values = GetValues(fMEvent);
            db.Open();
            db.Insert(sql, values);
            db.Close();
        }

        public List<FMEvent> Select()
        {
            db.Open();
            string sql = "SELECT * FROM farmers_market_event WHERE deleted = 'N' ORDER BY fm_date desc";
            List<ExpandoObject> results = db.Select(sql);

            List<FMEvent> fMEvents = new List<FMEvent>();

            foreach(dynamic item in results)
            {
                FMEvent temp = new FMEvent(){
                    FMEventID = item.fm_event_id,
                    FMDate = item.fm_date,
                };
            fMEvents.Add(temp);
            }
            db.Close();
                       
            return fMEvents;
        }

        public void Update(FMEvent fMEvent)
        {
            throw new System.NotImplementedException();
        }

        public Dictionary<string,object> GetValues(FMEvent fMEvent)
        {
            var values = new Dictionary<string,object>(){
                {"@fMEventID", fMEvent.FMEventID},
                {"@fMDate", fMEvent.FMDate},
            };
            return values;
        }
    }
}