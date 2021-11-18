using System;
using System.Collections.Generic;
using api.Model;
namespace api.Interfaces
{
    public interface IBusinessDataHandler
    {
        public List<Business> Select();
        public void Delete(Business business);
        public void Update(Business business);
        public void Insert(Business business);
    }
}