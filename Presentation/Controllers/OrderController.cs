using ReactApp.Business.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ReactApp.Presentation.Controllers
{
    public class OrderController : ApiController
    {
        public OrderManager orderManager = new OrderManager();


        // GET api/bike
        public IEnumerable<ReactApp.Presentation.Model.Order> GetOrdersForUser(int userId = 1)
        {
            System.Web.HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");

            var orders = orderManager.GetOrdersForUser(userId);

            return orders.Select(b => Presentation.Model.Order.FromDomainEntity(b));

        }


    }
}