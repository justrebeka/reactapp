using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Data.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public int Age { get; set; }
        public string Password { get; set; }
		
		 public static Business.Model.User ToBusiness(User bike)
        {
            return new Business.Model.User()
            {
                Id = bike.Id,
                Name = bike.Name,
                Height = bike.Height,
                Weight = bike.Weight,
                Age = bike.Age,
                Password = bike.Password

            };
        }

    }
}