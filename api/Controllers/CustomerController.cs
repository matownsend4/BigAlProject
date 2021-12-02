using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Model;
using api.Data;
using api.Interfaces;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        // GET: api/Customer
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Customer> Get()
        {
            ICustomerDataHandler customerDataHandler = new CustomerDataHandler();
            return customerDataHandler.Select();
        }

        // GET: api/Customer/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "GetCustomer")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Customer
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post([FromBody] Customer value)
        {
            ICustomerDataHandler customerDataHandler = new CustomerDataHandler();
            value.customerDataHandler.Insert(value);
        }

        // PUT: api/Customer/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Customer value)
        {
            value.customerDataHandler.Update(value);
        }

        // DELETE: api/Customer/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}