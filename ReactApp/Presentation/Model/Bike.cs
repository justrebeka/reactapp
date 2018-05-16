using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Presentation.Data.Model
{
    public class Bike
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public string Frame { get; set; }
        public string Fork { get; set; }
        public string Handlebar { get; set; }
        public string Rims { get; set; }
        public string Saddle { get; set; }
        public string Pedals { get; set; }
        public string FrontShifter { get; set; }
        public string RearShifter { get; set; }
        public string ShiftLevers { get; set; }
        public string Breaks { get; set; }
        public string BreakLevers { get; set; }
        public string Chain { get; set; }
        public string FrameSuspension { get; set; }
        public string ForkSuspension { get; set; }
        public string Engine { get; set; }
        public string Battery { get; set; }
        public string Computer { get; set; }
        public int Weight_kg { get; set; }
        public int MaxLoad_kg { get; set; }
        public int Price { get; set; }
        public int FrameSeries { get; set; }
        public int RiderHeight_cm { get; set; }


        public ReactApp.Business.Model.Bike ToBusiness()
        {
            return new ReactApp.Business.Model.Bike()
            {
                Id = this.Id,

            };

        }
    }
}
