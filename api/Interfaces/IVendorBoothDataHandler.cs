using System;
using System.Collections.Generic;
using api.Model;
namespace api.Interfaces
{
    public interface IVendorBoothDataHandler
    {
        public List<VendorBooth> Select();
        public void Delete(VendorBooth vendorBooth);
        public void Update(VendorBooth vendorBooth);
        public void Insert(VendorBooth vendorBooth);
    }
}