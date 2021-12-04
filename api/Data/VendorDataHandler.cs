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
            string sql = "INSERT INTO vendor(vendor_id, vendor_first_name, vendor_last_name, vendor_email, vendor_phone_no, vendor_password, business_name, business_type, business_description) VALUES(@vendorId, @vendorFName, @vendorLName, @vendorEmail, @vendorPassword, @vendorPhoneNo, @businessName, @businessType, @businessDescription)";

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
                    VendorFName = item.vendor_first_name,
                    VendorLName = item.vendor_last_name,
                    VendorEmail = item.vendor_email,
                    VendorPassword = item.vendor_password,
                    VendorPhoneNo = item.vendor_phone_no,
                    BusinessName = item.business_name,
                    BusinessType = item.business_type,
                    BusinessDescription = item.business_description
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
                {"@vendorId", vendor.VendorID},
                {"@vendorFName", vendor.VendorFName},
                {"@vendorLName", vendor.VendorLName},
                {"@vendorEmail", vendor.VendorEmail},
                {"@vendorPassword", vendor.VendorPassword},
                {"@vendorPhoneNo", vendor.VendorPhoneNo},
                //{"@businessId", vendor.BusinessID},
                {"@businessName", vendor.BusinessName},
                {"@businessType", vendor.BusinessType},
                {"@businessDescription", vendor.BusinessDescription},
            };
            return values;
        }
    }
}