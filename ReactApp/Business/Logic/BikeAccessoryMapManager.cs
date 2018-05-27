using ReactApp.Business.Model;
using ReactApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Logic
{
    public class BikeAccessoryMapManager
    {
        public BikeAccessoryMapRepository bikeAccessoryMapRepository = new BikeAccessoryMapRepository();

        public List<BikeAccessoryMap> GetBikeAccessoryMaps()
        {
            return bikeAccessoryMapRepository.GetBikeAccessoryMaps();
        }


        public void AddBikeAccessoryMao(BikeAccessoryMap bikeAccessoryMap)
        {
            bikeAccessoryMapRepository.AddBikeAccessoryMap(bikeAccessoryMap);
        }
    }
}