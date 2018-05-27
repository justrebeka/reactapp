using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Presentation.Model
{
    public class TestRide
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }


        public static ReactApp.Presentation.Model.TestRide FromDomainEntity(Business.Model.TestRide testRide)
        {
            return new ReactApp.Presentation.Model.TestRide()
            {
                Id = testRide.Id,
                Name = testRide.Name,
                Status = testRide.Status


            };

         }
    }
}