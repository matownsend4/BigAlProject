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
    public class TicketController : ControllerBase
    {
        // GET: api/Ticket
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Ticket> Get()
        {
            ITicketDataHandler ticketDataHandler = new TicketDataHandler();
            return ticketDataHandler.Select();
        }

        // GET: api/Ticket/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "GetTicket")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Ticket
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post([FromBody] Ticket value)
        {
            value.ticketDataHandler.Insert(value);
        }

        // PUT: api/Ticket/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Ticket/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
