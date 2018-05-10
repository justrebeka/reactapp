using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Model
{
    public class Bike
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public int Frame { get; set; }
        public int Fork { get; set; }
        public int Handlebar { get; set; }
        public int Rims { get; set; }
        public int Saddle { get; set; }
        public int Pedals { get; set; }
        public int FrontGear { get; set; }
        public int RearGear { get; set; }
        public int ShiftLevers { get; set; }
        public int Breaks { get; set; }
        public int BreakLevers { get; set; }
        public int Chain { get; set; }
        public int FrameSuspension { get; set; }
        public int ForkSuspension { get; set; }
        public int Engine { get; set; }
        public int Battery { get; set; }
        public int Computer { get; set; }
        public int Weight { get; set; }
        public int MaxLoad { get; set; }
        public int Price { get; set; }
        public int FrameSeries { get; set; }
    }
}
