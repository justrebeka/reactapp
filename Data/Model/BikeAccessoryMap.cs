using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Data.Model
{
    public class BikeAccessoryMap
    {
        public int Id { get; set; }
        public int BikeId { get; set; }
        public int AccessorryId { get; set; }
		
		 public static Business.Model.BikeAccessoryMap ToBusiness(BikeAccessoryMap bike)
        {
            return new Business.Model.BikeAccessoryMap()
            {
                BikeId = bike.BikeId,
                AccessorryId = bike.AccessorryId

            };
        }
    }
}