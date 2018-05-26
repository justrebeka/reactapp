using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Presentation.Data.Model
{
    public class User
    {
        public int iD { get; set; }
        public string Name { get; set; }
        public int Height_cm { get; set; }
        public int Weight_kg { get; set; }
        public int Age { get; set; }
        public string Password { get; set; }
    }
}