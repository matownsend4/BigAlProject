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
    public class VendorController : ControllerBase
    {
        // GET: api/Vendor
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Vendor> Get()
        {
            IVendorDataHandler vendorDataHandler = new VendorDataHandler();
            return vendorDataHandler.Select();
        }

        // GET: api/Vendor/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "GetVendor")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Vendor
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post([FromBody] Vendor value)
        {
          // value.vendorDataHandler.Insert(value);
        }

        // PUT: api/Vendor/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Vendor value)
        {
           // value.vendorDataHandler.Update(value);
        }

        // DELETE: api/Vendor/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
