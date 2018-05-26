using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactApp.Data
{
    public class BikeRepository
    {
        public List<Business.Model.Bike> GetBikes()
        {
            var bikes = new List<Data.Model.Bike>();
            using (var db = new BikeShopContext())
            {
                // Display all Bikes from the database 
                bikes = (from b in db.Bikes
                            orderby b.Model
                            select b).ToList();

                Console.WriteLine("All bikes in the database:");
                foreach (var item in bikes)
                {
                    Console.WriteLine(item.Model);
                }
            }

            return bikes.Select(b => Data.Model.Bike.ToBusiness(b)).ToList();
        }

        public void AddBike(Business.Model.Bike bike)
        {
            using (var db = new BikeShopContext())
            {
                // Create and save a new Bike               
                db.Bikes.Add(new Data.Model.Bike { Model = bike.Model});
                db.SaveChanges();
            }
        }
    }

}