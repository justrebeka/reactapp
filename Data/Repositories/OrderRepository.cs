using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;

namespace ReactApp.Data
{
    public class OrderRepository
    {
        public List<Business.Model.Order> GetOrdersForUser(string userId)
        {
            var orders = new List<Data.Model.Order>();
            using (var db = new BikeShopContext())
            {
                // Display all Orders from the database 
                orders = (from b in db.Orders.Include(o => o.Bike)
                          where b.UserId == userId
                         orderby b.Id
                         select b).ToList();

               
            }

            return orders.Select(b => Data.Model.Order.ToBusiness(b)).ToList();
        }

        public void AddOrder(Business.Model.Order order)
        {
            using (var db = new BikeShopContext())
            {
                // Create and save a new Order   
                var dbEntity = Business.Model.Order.ToDataEntity(order);
                db.Orders.Add(dbEntity);

                db.SaveChanges();
            }
        }
    }

}