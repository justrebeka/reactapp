using ReactApp.Business.Model;
using ReactApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Logic
{
    public class OrderManager
    {
        public OrderRepository orderRepository = new OrderRepository();
        public UserManager userManager = new UserManager();

        public List<Order> GetOrdersForUser(string userId)
        {
            return orderRepository.GetOrdersForUser(userId);
        }

        public void CreateOrder(string accessKey, int bikeId)
        {
            User user = userManager.GetUserByAccessKey(accessKey);
            if (user == null)
            {
                userManager.AddUser(new User { AccessKey = accessKey });
            }

            var order = new Order {
                Bike = new Bike { Id = bikeId },
                UserId = accessKey,
                Date = DateTime.Now,
                Number = Guid.NewGuid().ToString()                
            };

            orderRepository.AddOrder(order);
        }

       
    }
}