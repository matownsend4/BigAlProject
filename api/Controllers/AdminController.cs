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
    public class AdminController : ControllerBase
    {
        // GET: api/Admin
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Admin> Get()
        {
            IAdminDataHandler adminDataHandler = new AdminDataHandler();
            return adminDataHandler.Select();
        }

        // GET: api/Admin/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "GetAdmin")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Admin
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post([FromBody] Admin value)
        {
            value.adminDataHandler.Insert(value);
        }

        // PUT: api/Admin/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Admin value)
        {
             value.adminDataHandler.Update(value);
        }

        // DELETE: api/Admin/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Admin value = new Admin(){AdminID = id};
            value.adminDataHandler.Delete(value);
        }
    }
}
