using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FMEventController : ControllerBase
    {
        // GET: api/FMEvent
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/FMEvent/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/FMEvent
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/FMEvent/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/FMEvent/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
