using ReactApp.Business.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ReactApp.Presentation.Controllers
{
    public class BikeController : ApiController
    {
        public BikeManager bikeManager = new BikeManager();


        // GET api/bike
        public IEnumerable<ReactApp.Presentation.Model.Bike> Get()
        {
            var bikes = bikeManager.GetBikes();

            return bikes.Select(b => Presentation.Model.Bike.FromDomainEntity(b));

        }

        // GET api/bike/5
        public Model.Bike Get(int id)
        {
            Business.Model.Bike bike = bikeManager.GetBike(id);

            return Model.Bike.FromDomainEntity(bike);
        }

    }
}