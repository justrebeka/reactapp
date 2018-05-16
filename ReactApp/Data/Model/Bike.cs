
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
        public int Weight { get; set; }
        public int MaxLoad { get; set; }
        public int Price { get; set; }
        public string FrameSeries { get; set; }
        public int RiderHeight { get; set; }

        public static Business.Model.Bike ToBusiness(Bike bike)
        {
            return new Business.Model.Bike()
            {
                Model = bike.Model,
                Frame = bike.Frame
            };
        }
    }
}