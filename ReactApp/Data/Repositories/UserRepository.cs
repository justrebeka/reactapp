using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactApp.Data
{
    public class UserRepository
    {
        public List<Business.Model.User> GetUsers()
        {
            var users = new List<Data.Model.User>();
            using (var db = new BikeShopContext())
            {
                // Display all Users from the database 
                users = (from b in db.Users
                         orderby b.Name
                         select b).ToList();

                Console.WriteLine("All users in the database:");
                foreach (var item in users)
                {
                    Console.WriteLine(item.Name);
                }
            }

            return users.Select(b => Data.Model.User.ToBusiness(b)).ToList();
        }

        public void AddUser(Business.Model.User user)
        {
            using (var db = new BikeShopContext())
            {
                // Create and save a new User               
                db.Users.Add(new Data.Model.User { Name = user.Name });
                db.SaveChanges();
            }
        }
    }

}