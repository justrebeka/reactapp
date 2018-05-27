using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Presentation.Data.Model
{
    public class Accessory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }

        public ReactApp.Business.Model.Accessory ToBusiness()
        {
            return new ReactApp.Business.Model.Accessory()
            {
                Id = this.Id,
                Name = this.Name,
                Type = this.Type
            };

        }
    }
}