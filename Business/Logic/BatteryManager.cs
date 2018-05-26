using ReactApp.Business.Model;
using ReactApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Logic
{
    public class BatteryManager
    {
        public BatteryRepository batteryRepository = new BatteryRepository();

        public List<Battery> GetBatteries()
        {
            return batteryRepository.GetBatteries();
        }


        public void AddBattery(Battery battery)
        {
            batteryRepository.AddBattery(battery);
        }
    }
}