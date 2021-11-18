using api.Interfaces;
using api.Model;
using System.Collections.Generic;
using System.Dynamic;

namespace api.Data
{
    public class BusinessDataHandler : IBusinessDataHandler
    {
        private Database db;
        public BusinessDataHandler()
        {
            db = new Database();
        }
        public void Delete(Business business)
        {
            string sql = "UPDATE post SET deleted = 'Y' WHERE business_id = @businessid";
            var values = GetValues(business);
            db.Open();
            db.Update(sql, values);
            db.Close();
        }

        public void Insert(Business business)
        {
            string sql = "INSERT INTO business(business_id, business_name, business_type, business_revenue, business_description) VALUES(@businessId, @businessName, @businessType, @businessRevenue, @businessDescription";
      // update
            var values = GetValues(business);
            db.Open();
            db.Insert(sql, values);
            db.Close();
        }

        public List<Business> Select()
        {
            db.Open();
            string sql = "SELECT * FROM business WHERE deleted = 'N'";
            List<ExpandoObject> results = db.Select(sql);

            List<Business> businesses = new List<Business>();

            foreach(dynamic item in results)
            {
                Business temp = new Business(){
                    BusinessID = item.business_id,
                    BusinessName = item.business_name,
                    BusinessType = item.business_type,
                    BusinessRevenue = item.business_revenue,
                    BusinessDescription = item.business_description
                };
            businesses.Add(temp);
            }
            db.Close();
                       
            return businesses;
        }

        public void Update(Business business)
        {
            throw new System.NotImplementedException();
        }

        public Dictionary<string,object> GetValues(Business business)
        {
            var values = new Dictionary<string,object>(){
                {"@businessId", business.BusinessID},
                {"@businessName", business.BusinessName},
                {"@businessType", business.BusinessType},
                {"@businessRevenue", business.BusinessRevenue},
                {"@businessDescription", business.BusinessDescription},
            };
            return values;
        }
    }
}
    