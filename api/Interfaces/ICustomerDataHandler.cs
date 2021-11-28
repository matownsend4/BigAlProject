using System;
using System.Collections.Generic;
using api.Model;
namespace api.Interfaces
{
    public interface ICustomerDataHandler
    {
        public List<Customer> Select();
        public void Delete(Customer customer);
        public void Update(Customer customer);
        public void Insert(Customer customer);
    }
}