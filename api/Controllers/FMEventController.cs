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
    public class FMEventController : ControllerBase
    {
        // GET: api/FMEvent
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<FMEvent> Get()
        {
            IFMEventDataHandler fMEventDataHandler = new FMEventDataHandler();
            return fMEventDataHandler.Select();
        }

        // GET: api/FMEvent/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "GetFMEvent")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/FMEvent
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post([FromBody] FMEvent value)
        {
            value.fMEventDataHandler.Insert(value);
        }

        // PUT: api/FMEvent/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/FMEvent/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
