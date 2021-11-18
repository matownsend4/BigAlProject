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
    public class TicketController : ControllerBase
    {
        // GET: api/Ticket
        [HttpGet]
        public List<Ticket> Get()
        {
            ITicketDataHandler ticketDataHandler = new TicketDataHandler();
            return ticketDataHandler.Select();
        }

        // GET: api/Ticket/5
        [HttpGet("{id}", Name = "GetTicket")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Ticket
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Ticket/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Ticket/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
