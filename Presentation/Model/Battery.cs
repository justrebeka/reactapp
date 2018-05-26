using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Presentation.Data.Model
{
    public class Battery
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public int Autonomy_km { get; set; }
        public int Voltage { get; set; }
        public int ChargeTime_min { get; set; }

    }
}