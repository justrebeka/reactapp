using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ReactApp.Data.Model
{
    public class Accessory
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual int AccessoryTypeId { get; set; }

        [ForeignKey("AccessoryTypeId")]
        public virtual AccessoryType AccessoryType { get; set; }
		
		  public static Business.Model.Accessory ToBusiness(Accessory bike)
        {
            return new Business.Model.Accessory()
            {
                Id = bike.Id,
                Name = bike.Name,
                Type = AccessoryType.ToBusiness(bike.AccessoryType)
       
            };
        }
    }
}