using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactApp.Data
{
    public class EngineRepository
    {
        public List<Business.Model.Engine> GetEngines()
        {
            var engines = new List<Data.Model.Engine>();
            using (var db = new BikeShopContext())
            {
                // Display all Engines from the database 
                engines = (from b in db.Engines
                         orderby b.Name
                         select b).ToList();

                Console.WriteLine("All engines in the database:");
                foreach (var item in engines)
                {
                    Console.WriteLine(item.Name);
                }
            }

            return engines.Select(b => Data.Model.Engine.ToBusiness(b)).ToList();
        }

        public void AddEngine(Business.Model.Engine engine)
        {
            using (var db = new BikeShopContext())
            {
                // Create and save a new Engine               
                db.Engines.Add(new Data.Model.Engine { Name = engine.Name });
                db.SaveChanges();
            }
        }
    }

}