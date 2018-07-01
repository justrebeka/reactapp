using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ReactApp.Data.Model
{
    public class TestRide
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int BikeId { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }

        [ForeignKey("BikeId")]
        public virtual Bike Bike { get; set; }

        public static Business.Model.TestRide ToBusiness(TestRide bike)
        {
            return new Business.Model.TestRide()
            {
                Id = bike.Id,
                UserId = bike.UserId,
                Number = bike.Name,
                Status = bike.Status

            };
        }
    }
}