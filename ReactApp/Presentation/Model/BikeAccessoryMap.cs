using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Presentation.Data.Model
{
    public class BikeAccessoryMap
    {
        public int Id { get; set; }
        public int BikeId { get; set; }
        public int AccessorryId { get; set; }
    }
}