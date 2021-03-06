﻿using ReactApp.Business.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;


namespace ReactApp.Presentation.Controllers
{
    public class Order
    {
        public string userId { get; set; }
        public int bikeId { get; set; }

    }

    public class OrderController : ApiController
    {
        public OrderManager orderManager = new OrderManager();


        // GET api/bike
        public IEnumerable<ReactApp.Presentation.Model.Order> GetOrdersForUser(string accessKey)
        {
           var orders = orderManager.GetOrdersForUser(accessKey);

            return orders.Select(b => Presentation.Model.Order.FromDomainEntity(b));

        }

        [HttpPost]
        public IHttpActionResult Post([FromBody]Order order)
        {
            orderManager.CreateOrder(order.userId, order.bikeId);
            return Ok();
        }


    }
}