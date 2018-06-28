using System;

namespace ReactApp.Business.Model
{
    public class Order
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public Bike Bike { get; set; }
        public string UserId { get; set; }


        public Business.Model.Order ToBusiness()
        {
            var order = new Business.Model.Order
            {
                Id = this.Id,
                Number = this.Number,
                Date = this.Date,
                Status = this.Status,
                UserId = this.UserId
            };

          
            return order;

        }

        public static Data.Model.Order ToDataEntity(Business.Model.Order bOrder)
        {
            var offer = new Data.Model.Order
            {
                Id = bOrder.Id,
                Number = bOrder.Number,
                Date = bOrder.Date,
                Status = bOrder.Status,
                UserId = bOrder.UserId,
                BikeId = bOrder.Bike.Id
            };

            return offer;

        }
    }
}