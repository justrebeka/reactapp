using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Data.Model
{
    public class Battery
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public int Autonomy { get; set; }
        public int Voltage { get; set; }
        public int ChargeTime { get; set; }
		
		  public static Business.Model.Battery ToBusiness(Battery bike)
        {
            return new Business.Model.Battery()
            {
                Id = bike.Id,
                Model = bike.Model,
                Autonomy = bike.Autonomy,
                Voltage = bike.Voltage,
                ChargeTime = bike.ChargeTime

            };
        }

    }
}