using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Model;
using api.Data;
using api.Interfaces;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendorController : ControllerBase
    {
        // GET: api/Vendor
        [HttpGet]
        public List<Vendor> Get()
        {
            IVendorDataHandler vendorDataHandler = new VendorDataHandler();
            return vendorDataHandler.Select();
        }

        // GET: api/Vendor/5
        [HttpGet("{id}", Name = "GetVendor")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Vendor
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Vendor/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Vendor/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
