using ReactApp.Business.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactApp.Controllers
{
    public class ValuesController : ApiController
    {
        public BikeManager bikeManager = new BikeManager();
        // GET api/values
        public IEnumerable<string> Get()
        {
            System.Web.HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");

            var bikes = bikeManager.GetBikes();

            return new string[] {"Why React ?", "React concepts","Node.js", "Browserify","Gulp", "Why Flux ?", "Flux concepts","How Flux works" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            bikeManager.AddBike(new Business.Model.Bike { Model = id.ToString()});
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
