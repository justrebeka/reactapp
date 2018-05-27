using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactApp.Data
{
    public class BikeAccessoryMapRepository
    {
        public List<Business.Model.BikeAccessoryMap> GetBikeAccessoryMaps()
        {
            var bikeAccessoryMaps = new List<Data.Model.BikeAccessoryMap>();
            using (var db = new BikeShopContext())
            {
                // Display all BikeAccessoryMaps from the database 
                bikeAccessoryMaps = (from b in db.BikeAccessoryMap
                         orderby b.BikeId
                         select b).ToList();

                Console.WriteLine("All bikeAccessoryMaps in the database:");
                foreach (var item in bikeAccessoryMaps)
                {
                    Console.WriteLine(item.BikeId);
                }
            }

            return bikeAccessoryMaps.Select(b => Data.Model.BikeAccessoryMap.ToBusiness(b)).ToList();
        }

        public void AddBikeAccessoryMap(Business.Model.BikeAccessoryMap bikeAccessoryMap)
        {
            using (var db = new BikeShopContext())
            {
                // Create and save a new BikeAccessoryMap              
                db.BikeAccessoryMap.Add(new Data.Model.BikeAccessoryMap { BikeId = bikeAccessoryMap.BikeId });
                db.SaveChanges();
            }
        }
    }

}