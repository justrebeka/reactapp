using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Presentation.Model
{
    public class TestRide
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int BikeId { get; set; }
        public string Number { get; set; }
        public string Status { get; set; }


        public static ReactApp.Presentation.Model.TestRide FromDomainEntity(Business.Model.TestRide testRide)
        {
            return new ReactApp.Presentation.Model.TestRide()
            {
                Id = testRide.Id,
                Number = testRide.Number,
                Status = testRide.Status

            };

         }
    }
}