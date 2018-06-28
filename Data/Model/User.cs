using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Data.Model
{
    public class User
    {
        public int Id { get; set; }
        public string AccessKey { get; set; }
        public string Name { get; set; }
		
		 public static Business.Model.User ToBusiness(User bike)
        {
            return new Business.Model.User()
            {
                Id = bike.Id,
                AccessKey = bike.AccessKey,
                Name = bike.Name

            };
        }

    }
}