using api.Interfaces;
using api.Model;
using System.Collections.Generic;
using System.Dynamic;

namespace api.Data
{
    public class CustomerDataHandler : ICustomerDataHandler
    {
        private Database db;
        public CustomerDataHandler()
        {
            db = new Database();
        }
        public void Delete(Customer customer)
        {
            string sql = "UPDATE post SET deleted = 'Y' WHERE customer_id = @customerid";
            var values = GetValues(customer);
            db.Open();
            db.Update(sql, values);
            db.Close();
        }

        public void Insert(Customer customer)
        {
            string sql = "INSERT INTO customer(customer_id, customer_name, customer_email, customer_password, customer_phone_no) VALUES(@customerId, @customerName, @customerEmail, @customerPassword, @customerPhoneNo";
      
            var values = GetValues(customer);
            db.Open();
            db.Insert(sql, values);
            db.Close();
        }

        public List<Customer> Select()
        {
            db.Open();
            string sql = "SELECT * FROM customer WHERE deleted = 'N'";
            List<ExpandoObject> results = db.Select(sql);

            List<Customer> customers = new List<Customer>();

            foreach(dynamic item in results)
            {
                Customer temp = new Customer(){
                    CustomerID = item.customer_id,
                    CustomerName = item.customer_name,
                    CustomerEmail = item.customer_email,
                    CustomerPassword = item.customer_password,
                    CustomerPhoneNo = item.customer_phone_no
                };
            customers.Add(temp);
            }
            db.Close();
                       
            return customers;
        }

        public void Update(Customer customer)
        {
            throw new System.NotImplementedException();
        }

        public Dictionary<string,object> GetValues(Customer customer)
        {
            var values = new Dictionary<string,object>(){
                {"@customerId", customer.CustomerID},
                {"@customerName", customer.CustomerName},
                {"@customerEmail", customer.CustomerEmail},
                {"@customerPassword", customer.CustomerPassword},
                {"@customerPhoneNo", customer.CustomerPhoneNo},
            };
            return values;
        }
    }
}