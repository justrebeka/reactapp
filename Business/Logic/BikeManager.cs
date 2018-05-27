using ReactApp.Business.Model;
using ReactApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Logic
{
    public class BikeManager
    {
        public BikeRepository bikeRepository = new BikeRepository();

        public List<Bike> GetBikes()
        {
            return bikeRepository.GetBikes();
        }

        public Model.Bike GetBike(int id)
        {
           return bikeRepository.GetBike(id);
        }

        public void AddBike(Bike bike)
        {
            bikeRepository.AddBike(bike);
        }
    }
}