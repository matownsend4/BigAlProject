using System;
using api.Interfaces;
using api.Data;

namespace api.Model
{
    public class Vendor
    {
        public int VendorID {get; set;}
        public string VendorFName {get; set;}
        public string VendorLName {get; set;}
        public string VendorEmail {get; set;}
        public string VendorPassword {get; set;}
        public string VendorPhoneNo {get; set;}
        public string BusinessID {get; set;}
        public string BusinessName {get; set;}
        public string BusinessType {get; set;}
        public string BusinessDescription {get; set;}

        public IVendorDataHandler vendorDataHandler {get; set;}
        public Vendor()
        {
            vendorDataHandler = new VendorDataHandler();
        }
    }
}