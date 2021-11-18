using System;
using System.Collections.Generic;
using api.Model;
namespace api.Interfaces
{
    public interface IVendorDataHandler
    {
        public List<Vendor> Select();
        public void Delete(Vendor vendor);
        public void Update(Vendor vendor);
        public void Insert(Vendor vendor);
    }
}