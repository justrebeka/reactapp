using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Presentation.Data.Model
{
    public class PurchasedBikes
    {
        public int BikeId { get; set; }
        public string Model { get; set; }
        public String Size { get; set; }
        public int Price { get; set; }
        public string FrameSeries { get; set; }
    }
}