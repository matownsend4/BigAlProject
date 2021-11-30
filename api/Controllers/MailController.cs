using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        private readonly IMailService mailService;
        public MailController(IMailService mailService)
        {
            this.mailService = mailService;
        }
    [HttpPost("send")]
    public async Task<IActionResult> SendMail([FromForm]MailRequest request)
    {
        try
        {
            await mailService.SendEmailAsync(request);
            return Ok();
        }
        catch (Exception)
        {
            throw;
        }
            
    }
        // GET: api/MailCotroller
        [HttpGet]
        
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/MailCotroller/5
        [HttpGet("{id}", Name = "GetMail")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/MailCotroller
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/MailCotroller/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/MailCotroller/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpPost("welcome")]
        public async Task<IActionResult> SendWelcomeMail([FromForm]WelcomeRequest request)
        {
        try
        {
            await mailService.SendWelcomeEmailAsync(request);
            return Ok();
        }
        catch (Exception)
            {
            throw;
        }
    }
}
}
