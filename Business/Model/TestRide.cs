using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Model
{
    public class TestRide
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Number { get; set; }
        public string Status { get; set; }
        public Bike Bike { get; set; }
        public DateTime Date { get; set; }

        public static Data.Model.TestRide ToDataEntity(Business.Model.TestRide bTestRide)
        {
            var testRide = new Data.Model.TestRide
            {
                Id = bTestRide.Id,
                Name = bTestRide.Number,
              //  Date = bTestRide.Date,
                Status = bTestRide.Status,
                UserId = bTestRide.UserId,
                BikeId = bTestRide.Bike.Id
            };

            return testRide;

        }
    }
}