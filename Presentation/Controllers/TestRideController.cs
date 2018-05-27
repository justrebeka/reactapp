using ReactApp.Business.Logic;
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
        public IEnumerable<ReactApp.Presentation.Model.TestRide> GetTestRidesForUser(int userId = 1)
        {
            System.Web.HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");

            var testRides = testRideManager.GetTestRidesForUser(userId);

            return testRides.Select(b => Presentation.Model.TestRide.FromDomainEntity(b));

        }

    }
}