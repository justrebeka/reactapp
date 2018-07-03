using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace ReactApp.Data.Model
{
    public class Order
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }

        public int BikeId { get; set; }
        public string UserId { get; set; }

        [ForeignKey("BikeId")]
        public virtual Bike Bike { get; set; }

        //[ForeignKey("UserId")]
        //public virtual User User { get; set; }

        public static Business.Model.Order ToBusiness(Order order)
        {
            return new Business.Model.Order()
            {
                Id = order.Id,
                Number = order.Number,
                Date = order.Date,
                Status = order.Status,
                UserId = order.UserId,
                Bike = Bike.ToBusiness(order.Bike)

            };
        }
    }
}