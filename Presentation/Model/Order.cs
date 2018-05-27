using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Presentation.Model
{
    public class Order
    {
        public int userId { get; set; }
        public int orderId { get; set; }
        public int Number { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public string Product { get; set; }
    }
}