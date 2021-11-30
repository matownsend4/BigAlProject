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
    public class BusinessController : ControllerBase
    {
        // GET: api/Business
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Business> Get()
        {
            IBusinessDataHandler businessDataHandler = new BusinessDataHandler();
            return businessDataHandler.Select();
        }

        // GET: api/Business/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "GetBusiness")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Business
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post([FromBody] Business value)
        {
            value.businessDataHandler.Insert(value);
        }

        // PUT: api/Business/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Business/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
