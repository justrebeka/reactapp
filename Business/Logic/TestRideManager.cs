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
        public UserManager userManager = new UserManager();

        public List<TestRide> GetTestRidesForUser(string accessKey)
        {
            return testRideRepository.GetTestRidesForUser(accessKey);
        }

        public void CreateTestRide(string accessKey, int bikeId)
        {
            User user = userManager.GetUserByAccessKey(accessKey);
            if (user == null)
            {
                userManager.AddUser(new User { AccessKey = accessKey });
            }

            var testRide = new TestRide
            {
                Bike = new Bike { Id = bikeId },
                UserId = accessKey,
                Date = DateTime.Now,
                Number = Guid.NewGuid().ToString()
            };

            testRideRepository.AddTestRide(testRide);
        }
    }
}