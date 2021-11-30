using System;
using api.Interfaces;
using api.Data;

namespace api.Model
{
    public class Vendor
    {
        public int VendorID {get; set;}
        public string VendorName {get; set;}
        public string VendorEmail {get; set;}
        public string VendorPassword {get; set;}
        public string VendorPhoneNo {get; set;}
        public IVendorDataHandler vendorDataHandler {get; set;}
        public Vendor()
        {
            vendorDataHandler = new VendorDataHandler();
        }
    }
}