using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Data.Model
{
    public class Engine
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String Model { get; set; }
        public int MaxSpeed { get; set; }
        public int Power { get; set; }
        public int ElectricVoltage { get; set; }
		
		  public static Business.Model.Engine ToBusiness(Engine bike)
        {
            return new Business.Model.Engine()
            {
                Id = bike.Id,
                Name = bike.Name,
                Model = bike.Model,
                MaxSpeed = bike.MaxSpeed,
                Power = bike.Power,
                ElectricVoltage = bike.ElectricVoltage

            };
        }
    }
}