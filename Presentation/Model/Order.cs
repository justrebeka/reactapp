using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Presentation.Model
{
    public class Order
    {
        public int UserId { get; set; }
        public int Id { get; set; }
        public int Number { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public string Product { get; set; }

        public static ReactApp.Presentation.Model.Order FromDomainEntity(Business.Model.Order order)
        {
            return new ReactApp.Presentation.Model.Order()
            {
                Id = order.Id,
                Date = order.Date,
                Status = order.Status
            };

        }
    }
}