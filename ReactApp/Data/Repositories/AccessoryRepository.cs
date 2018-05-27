using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactApp.Data
{
    public class AccessoryRepository
    {
        public List<Business.Model.Accessory> GetAccessories()
        {
            var accessory = new List<Data.Model.Accessory>();
            using (var db = new BikeShopContext())
            {
                // Display all Accessories from the database 
                accessory = (from b in db.Accessories
                         orderby b.Name
                         select b).ToList();

                Console.WriteLine("All accessories in the database:");
                foreach (var item in accessory)
                {
                    Console.WriteLine(item.Name);
                }
            }

            return accessory.Select(b => Data.Model.Accessory.ToBusiness(b)).ToList();
        }

        public void AddAccessory(Business.Model.Accessory accessory)
        {
            using (var db = new BikeShopContext())
            {
                // Create and save a new Accessory               
                db.Accessories.Add(new Data.Model.Accessory { Name = accessory.Name });
                db.SaveChanges();
            }
        }
    }

}