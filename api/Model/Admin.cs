using System.Security.AccessControl;
using api.Data;
using api.Interfaces;

namespace api.Model
{
    public class Admin
    {
        public int AdminID {get; set;}
        public string AdminEmail {get; set;}
        public string AdminPassword {get; set;}
        public IAdminDataHandler adminDataHandler {get; set;}
        public Admin()
        {
            adminDataHandler = new AdminDataHandler();
        }
    }
}