using api.Interfaces;
using api.Model;
using System.Collections.Generic;
using System.Dynamic;

namespace api.Data
{
    public class VendorBoothDataHandler : IVendorBoothDataHandler
    {
        private Database db;
        public VendorBoothDataHandler()
        {
            db = new Database();
        }
        public void Delete(VendorBooth vendorBooth)
        {
            string sql = "UPDATE vendor_booth SET deleted = 'Y' WHERE booth_id = @boothid";
            var values = GetValues(vendorBooth);
            db.Open();
            db.Update(sql, values);
            db.Close();
        }

        public void Insert(VendorBooth vendorBooth)
        {
            string sql = "INSERT INTO vendor_booth(booth_id, booth_cost) VALUES(@boothId, @boothCost";
      
            var values = GetValues(vendorBooth);
            db.Open();
            db.Insert(sql, values);
            db.Close();
        }

        public List<VendorBooth> Select()
        {
            db.Open();
            string sql = "SELECT * FROM vendor_booth WHERE deleted = 'N'";
            List<ExpandoObject> results = db.Select(sql);

            List<VendorBooth> vendorBooths = new List<VendorBooth>();

            foreach(dynamic item in results)
            {
                VendorBooth temp = new VendorBooth(){
                    BoothID = item.booth_id,
                    BoothCost = item.booth_cost,
                };
            vendorBooths.Add(temp);
            }
            db.Close();
                       
            return vendorBooths;
        }

        public void Update(VendorBooth vendorBooth)
        {
            throw new System.NotImplementedException();
        }

        public Dictionary<string,object> GetValues(VendorBooth vendorBooth)
        {
            var values = new Dictionary<string,object>(){
                {"@boothId", vendorBooth.BoothID},
                {"@boothCost", vendorBooth.BoothCost},
            };
            return values;
        }
    }
}