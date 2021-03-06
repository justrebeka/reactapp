﻿
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactApp.Data.Model
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
        public string FrontGear { get; set; }
        public string RearGear { get; set; }
        public string ShiftLevers { get; set; }
        public string Breaks { get; set; }
        public string BreakLevers { get; set; }
        public string Chain { get; set; }
        public string FrameSuspension { get; set; }
        public string ForkSuspension { get; set; }
        public string Computer { get; set; }
        public int Weight { get; set; }
        public int MaxLoad { get; set; }
        public int Price { get; set; }
        public string FrameSeries { get; set; }
        public int RiderHeight { get; set; }

        public int EngineId { get; set; }
        public int BatteryId { get; set; }
        public string Image { get; set; }

        [ForeignKey("EngineId")]
        public virtual Engine Engine {get; set; }

        [ForeignKey("BatteryId")]
        public virtual Battery Battery { get; set; }

        public static Business.Model.Bike ToBusiness(Bike bike)
        {
            return new Business.Model.Bike()
            {
                Id = bike.Id,
                Model = bike.Model,
                Frame = bike.Frame,
                Fork = bike.Fork,
                Handlebar = bike.Handlebar,
                Rims = bike.Rims,
                Saddle = bike.Saddle,
                Pedals = bike.Pedals,
                FrontGear = bike.FrontGear,
                RearGear = bike.RearGear,     
                ShiftLevers = bike.ShiftLevers,
                Breaks = bike.Breaks,
                BreakLevers = bike.BreakLevers,
                Chain = bike.Chain,
                FrameSuspension = bike.FrameSuspension,
                ForkSuspension = bike.ForkSuspension,
                Computer = bike.Computer,
                Weight = bike.Weight,
                MaxLoad = bike.MaxLoad,
                Price = bike.Price,
                FrameSeries = bike.FrameSeries,
                RiderHeight = bike.RiderHeight,
                Image = bike.Image
            };
        }
    }
}