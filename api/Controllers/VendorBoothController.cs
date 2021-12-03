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
    public class VendorBoothController : ControllerBase
    {
        // GET: api/VendorBooth
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<VendorBooth> Get()
        {
            IVendorBoothDataHandler vendorBoothDataHandler = new VendorBoothDataHandler();
            return vendorBoothDataHandler.Select();
        }

        // GET: api/VendorBooth/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "GetVendorBooth")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/VendorBooth
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post([FromBody] VendorBooth value)
        {
            IVendorBoothDataHandler vendorBoothDataHandler = new VendorBoothDataHandler();
            value.vendorBoothDataHandler.Insert(value);
        }

        // PUT: api/VendorBooth/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/VendorBooth/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
