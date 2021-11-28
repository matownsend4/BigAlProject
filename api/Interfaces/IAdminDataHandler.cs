using System;
using System.Collections.Generic;
using api.Model;

namespace api.Interfaces
{
    public interface IAdminDataHandler
    {
        public List<Admin> Select();
        public void Delete(Admin admin);
        public void Update(Admin admin);
        public void Insert(Admin admin);
    }
}