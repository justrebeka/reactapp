using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactApp.Data
{
    public class OrderRepository
    {
        public List<Business.Model.Order> GetOrders()
        {
            var orders = new List<Data.Model.Order>();
            using (var db = new BikeShopContext())
            {
                // Display all Orders from the database 
                orders = (from b in db.Orders
                         orderby b.OrderId
                         select b).ToList();

                Console.WriteLine("All orders in the database:");
                foreach (var item in orders)
                {
                    Console.WriteLine(item.OrderId);
                }
            }

            return orders.Select(b => Data.Model.Order.ToBusiness(b)).ToList();
        }

        public void AddOrder(Business.Model.Order order)
        {
            using (var db = new BikeShopContext())
            {
                // Create and save a new Order               
                db.Orders.Add(new Data.Model.Order { OrderId = order.OrderId });
                db.SaveChanges();
            }
        }
    }

}