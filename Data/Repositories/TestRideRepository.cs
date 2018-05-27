using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactApp.Data
{
    public class TestRideRepository
    {
        public List<Business.Model.TestRide> GetTestRidesForUser(int userId)
        {
            var testrides = new List<Data.Model.TestRide>();
            using (var db = new BikeShopContext())
            {
                // Display all TestRides from the database 
                testrides = (from b in db.TestRides
                             where b.UserId == userId
                             orderby b.Id
                         select b).ToList();

                foreach (var item in testrides)
                {
                    Console.WriteLine(item.Id);
                }
            }

            return testrides.Select(b => Data.Model.TestRide.ToBusiness(b)).ToList();
        }

        public void AddTestRide(Business.Model.TestRide testride)
        {
            using (var db = new BikeShopContext())
            {
                // Create and save a new TestRide               
                db.TestRides.Add(new Data.Model.TestRide { Id = testride.Id});
                db.SaveChanges();
            }
        }
    }

}