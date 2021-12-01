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
            string sql = "INSERT INTO customer(customer_id, customer_name, customer_email, customer_password, customer_phone_no) VALUES(@customerId, @customerName, @customerEmail, @customerPassword, @customerPhoneNo)";
      
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
                    CustomerFName = item.customer_first_name,
                    CustomerLName = item.customer_last_name,
                    CustomerEmail = item.customer_email,
                    CustomerPhoneNo = item.customer_phone_no,
                    CustomerPassword = item.customer_password
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
                {"@customer_id", customer.CustomerID},
                {"@customer_first_name", customer.CustomerFName},
                {"@customer_last_name", customer.CustomerLName},
                {"@customer_email", customer.CustomerEmail},
                {"@customer_phoneNo", customer.CustomerPhoneNo},
                {"@customer_password", customer.CustomerPassword}
            };
            return values;
        }
    }
}