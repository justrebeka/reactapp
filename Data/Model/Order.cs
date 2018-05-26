using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ReactApp.Data.Model
{
    public class Order
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }

        public int BikeId { get; set; }

        [ForeignKey("BikeId")]
        public virtual Bike Bike { get; set; }

        public static Business.Model.Order ToBusiness(Order bike)
        {
            return new Business.Model.Order()
            {
                Id = bike.Id,
                Number = bike.Number,
                Date = bike.Date,
                Status = bike.Status,
                Bike = Bike.ToBusiness(bike.Bike)

            };
        }
    }
}