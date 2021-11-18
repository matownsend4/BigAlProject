using api.Interfaces;
using api.Model;
using System.Collections.Generic;
using System.Dynamic;

namespace api.Data
{
    public class AdminDataHandler :IAdminDataHandler
    {
        private Database db;
        public AdminDataHandler()
        {
            db = new Database();
        }
        public void Delete(Admin admin)
        {
            string sql = "UPDATE post SET deleted = 'Y' WHERE admin_id = @id";
            var values = GetValues(admin);
            db.Open();
            db.Update(sql, values);
            db.Close();
        }

        public void Insert(Admin admin)
        {
            string sql = "INSERT INTO admin(id, admin_email, admin_password) VALUES(@adminId, @adminEmail, @adminPassword";
      
            var values = GetValues(admin);
            db.Open();
            db.Insert(sql, values);
            db.Close();
        }

        public List<Admin> Select()
        {
            db.Open();
            string sql = "SELECT * FROM admin WHERE deleted = 'N'";
            List<ExpandoObject> results = db.Select(sql);

            List<Admin> admins = new List<Admin>();

            foreach(dynamic item in results)
            {
                Admin temp = new Admin(){
                    AdminID = item.admin_id,
                    AdminEmail = item.admin_email,
                    AdminPassword = item.admin_password
                };
            admins.Add(temp);
            }
            db.Close();
                       
            return admins;
        }


        public void Update(Admin admin)
        {
            throw new System.NotImplementedException();
        }

        public Dictionary<string,object> GetValues(Admin admin)
        {
            var values = new Dictionary<string,object>(){
                {"@adminId", admin.AdminID},
                {"@adminEmail", admin.AdminEmail},
                {"@adminPassword", admin.AdminPassword}
            };
            return values;
        }
    }
}