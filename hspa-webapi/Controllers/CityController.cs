using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using hspa-webapi.Models;

namespace hspa_webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        public CityController()
        {
        }

        // GET api/city
        [HttpGet("")]
        public IEnumerable<string> Get()
        {
            return new List<string> { "Pune", "Mumbai", "Delhi", "Latur", "Nanded" };
        }

        // GET api/city/5
        [HttpGet("{id}")]
        public string GetstringById(int id)
        {
            return "Pune";
        }
    }
}