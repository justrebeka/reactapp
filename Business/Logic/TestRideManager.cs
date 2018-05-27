using ReactApp.Business.Model;
using ReactApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Logic
{
    public class TestRideManager
    {
        public TestRideRepository testRideRepository = new TestRideRepository();

        public List<TestRide> GetTestRidesForUser(int userId)
        {
            return testRideRepository.GetTestRidesForUser(userId);
        }


        public void AddTestRide(TestRide testRide)
        {
            testRideRepository.AddTestRide(testRide);
        }
    }
}