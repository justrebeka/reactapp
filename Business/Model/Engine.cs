using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Model
{
    public class Engine
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String Model { get; set; }
        public int MaxSpeed { get; set; }
        public int Power { get; set; }
        public int ElectricVoltage { get; set; }
    }
}