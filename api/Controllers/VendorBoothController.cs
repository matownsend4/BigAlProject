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
    public class VendorBoothController : ControllerBase
    {
        // GET: api/VendorBooth
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/VendorBooth/5
        [HttpGet("{id}", Name = "GetVendorBooth")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/VendorBooth
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/VendorBooth/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/VendorBooth/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
