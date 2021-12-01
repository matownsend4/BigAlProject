using api.Interfaces;
using api.Model;
using System.Collections.Generic;
using System.Dynamic;

namespace api.Data
{
    public class VendorDataHandler : IVendorDataHandler
    {
         private Database db;
        public VendorDataHandler()
        {
            db = new Database();
        }
        public void Delete(Vendor vendor)
        {
            string sql = "UPDATE vendor SET deleted = 'Y' WHERE vendor_id = @vendorid";
            var values = GetValues(vendor);
            db.Open();
            db.Update(sql, values);
            db.Close();
        }

        public void Insert(Vendor vendor)
        {
            string sql = "INSERT INTO vendor(vendor_id, vendor_name, vendor_email, vendor_password, vendor_phone_no) VALUES(@vendorId, @vendorName, @vendorEmail, @vendorPassword, @vendorPhoneNo)";
      
            var values = GetValues(vendor);
            db.Open();
            db.Insert(sql, values);
            db.Close();
        }

        public List<Vendor> Select()
        {
            db.Open();
            string sql = "SELECT * FROM vendor WHERE deleted = 'N'";
            List<ExpandoObject> results = db.Select(sql);

            List<Vendor> vendors = new List<Vendor>();

            foreach(dynamic item in results)
            {
                Vendor temp = new Vendor(){
                    VendorID = item.vendor_id,
                    VendorName = item.vendor_name,
                    VendorEmail = item.vendor_email,
                    VendorPassword = item.vendor_password,
                    VendorPhoneNo = item.vendor_phone_no
                };
            vendors.Add(temp);
            }
            db.Close();
                       
            return vendors;
        }

        public void Update(Vendor vendor)
        {
            throw new System.NotImplementedException();
        }

        public Dictionary<string,object> GetValues(Vendor vendor)
        {
            var values = new Dictionary<string,object>(){
                {"@vendrId", vendor.VendorID},
                {"@vendorName", vendor.VendorName},
                {"@vendorEmail", vendor.VendorEmail},
                {"@vendorPassword", vendor.VendorPassword},
                {"@vendorPhoneNo", vendor.VendorPhoneNo},
            };
            return values;
        }
    }
}