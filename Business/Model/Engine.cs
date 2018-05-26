using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Model
{
    public class Engine
    {
        public int enginde_Id { get; set; }
        public String Name { get; set; }
        public String Model { get; set; }
        public int Max_speed_km { get; set; }
        public int Power_watts { get; set; }
        public int Electric_voltage { get; set; }
    }
}