using ReactApp.Business.Logic;
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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
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

        [HttpPost]
        public IHttpActionResult Post([FromBody]Order order)
        {

            System.Web.HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
            return Ok();
        }


    }
}