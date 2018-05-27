using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public int Age { get; set; }
        public string Password { get; set; }
    }
}