using ReactApp.Business.Logic;
using ReactApp.Presentation.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ReactApp.Presentation.Controllers
{
    public class TestRideController : ApiController
    {
        public TestRideManager testRideManager = new TestRideManager();


        // GET api/bike
        public IEnumerable<ReactApp.Presentation.Model.TestRide> GetTestRidesForUser(string accessKey)
        {
            var testRides = testRideManager.GetTestRidesForUser(accessKey);

            return testRides.Select(b => Presentation.Model.TestRide.FromDomainEntity(b));

        }


        [HttpPost]
        public IHttpActionResult Post([FromBody]TestRide testRide)
        {
            testRideManager.CreateTestRide(testRide.UserId, testRide.BikeId);
            return Ok();
        }

    }
}