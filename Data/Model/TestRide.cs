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
        public string Model { get; internal set; }
        public string Image { get; internal set; }

        public static Business.Model.TestRide ToBusiness(TestRide testRide)
        {
            return new Business.Model.TestRide()
            {
                Id = testRide.Id,
                UserId = testRide.UserId,
                Number = testRide.Name,
                Status = testRide.Status,
                Bike = Bike.ToBusiness(testRide.Bike)
            };
        }
    }
}