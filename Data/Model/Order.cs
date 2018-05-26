using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Data.Model
{
    public class Order
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int Number { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public string Product { get; set; }
    }
}