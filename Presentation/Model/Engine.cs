using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Presentation.Data.Model
{
    public class Engine
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String Model { get; set; }
        public int Max_speed_km { get; set; }
        public int Power_watts { get; set; }
        public int Electric_voltage { get; set; }
    }
}