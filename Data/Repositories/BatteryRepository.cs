using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactApp.Data
{
    public class BatteryRepository
    {
        public List<Business.Model.Battery> GetBatteries()
        {
            var batteries = new List<Data.Model.Battery>();
            using (var db = new BikeShopContext())
            {
                // Display all Batteries from the database 
                batteries = (from b in db.Batteries
                         orderby b.Model
                         select b).ToList();

                Console.WriteLine("All batteries in the database:");
                foreach (var item in batteries)
                {
                    Console.WriteLine(item.Model);
                }
            }

            return batteries.Select(b => Data.Model.Battery.ToBusiness(b)).ToList();
        }

        public void AddBattery(Business.Model.Battery battery)
        {
            using (var db = new BikeShopContext())
            {
                // Create and save a new Battery              
                db.Batteries.Add(new Data.Model.Battery { Model = battery.Model });
                db.SaveChanges();
            }
        }
    }

}