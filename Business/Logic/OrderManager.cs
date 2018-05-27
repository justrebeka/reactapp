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

        public List<Order> GetOrdersForUser(int userId)
        {
            return orderRepository.GetOrdersForUser(userId);
        }


        public void AddOrder(Order order)
        {
            orderRepository.AddOrder(order);
        }
    }
}