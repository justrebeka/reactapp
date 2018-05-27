using ReactApp.Business.Model;
using ReactApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Logic
{
    public class AccessoryManager
    {
        public AccessoryRepository accessoryRepository = new AccessoryRepository();

        public List<Accessory> GetAccessories()
        {
            return accessoryRepository.GetAccessories();
        }


        public void AddAccessory(Accessory accessory)
        {
            accessoryRepository.AddAccessory(accessory);
        }
    }
}