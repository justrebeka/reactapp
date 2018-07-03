using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;

namespace ReactApp.Data
{
    public class TestRideRepository
    {
        public List<Business.Model.TestRide> GetTestRidesForUser(string accessKey)
        {
            var testrides = new List<Data.Model.TestRide>();
            using (var db = new BikeShopContext())
            {
                // Display all TestRides from the database 
                testrides = (from b in db.TestRides.Include(p => p.Bike)
                             where b.UserId == accessKey
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
                var dbEntity = Business.Model.TestRide.ToDataEntity(testride);
                // Create and save a new TestRide               
                db.TestRides.Add(dbEntity);
                db.SaveChanges();
            }
        }
    }

}