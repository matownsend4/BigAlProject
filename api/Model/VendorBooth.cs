using api.Data;
using api.Interfaces;
using System;

namespace api.Model
{
    public class VendorBooth
    {
        public int BoothID {get; set;}
        public string BoothCost {get; set;}
        public int VendorID {get; set;}
        public IVendorBoothDataHandler vendorBoothDataHandler {get; set;}
        public VendorBooth()
        {
            vendorBoothDataHandler = new VendorBoothDataHandler();
        }
    }
}