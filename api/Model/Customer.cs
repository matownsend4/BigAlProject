using System;
using api.Interfaces;
using api.Data;
namespace api.Model
{
    public class Customer
    {
        public int CustomerID {get; set;}
        public string CustomerFName {get; set;}
        public string CustomerLName {get; set;}
        public string CustomerEmail {get; set;}
        public string CustomerPassword {get; set;}
        public string CustomerPhoneNo {get; set;}
        public ICustomerDataHandler customerDataHandler {get; set;}
        public Customer()
        {
            customerDataHandler = new CustomerDataHandler();
        }
        
    }
}