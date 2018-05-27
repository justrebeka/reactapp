using ReactApp.Business.Model;
using ReactApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Logic
{
    public class EngineManager
    {
        public EngineRepository engineRepository = new EngineRepository();

        public List<Engine> GetEngines()
        {
            return engineRepository.GetEngines();
        }


        public void AddEngine(Engine engine)
        {
            engineRepository.AddEngine(engine);
        }
    }
}