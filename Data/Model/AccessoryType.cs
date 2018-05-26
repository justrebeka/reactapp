using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Data.Model
{
    public class AccessoryType
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public static Business.Model.AccessoryType ToBusiness(AccessoryType bike)
        {
            return new Business.Model.AccessoryType()
            {
                Id = bike.Id,
                Name = bike.Name

            };
        }
    }
}