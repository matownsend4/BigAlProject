using api.Data;
using api.Interfaces;

namespace api.Model
{
    public class FMEvent
    {
        public int FMEventID {get; set;}
        public string FMDate {get; set;}
        public string FMLocation {get; set;}
        public string FMAttendees {get; set;}
        public string FMTotalRevenue {get; set;}
        public IFMEventDataHandler fMEventDataHandler {get; set;}
        public FMEvent()
        {
            fMEventDataHandler = new FMEventDataHandler();
        }
    }
}