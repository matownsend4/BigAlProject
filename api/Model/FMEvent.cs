using System;
using api.Data;
using api.Interfaces;

namespace api.Model
{
    public class FMEvent
    {
        public int FMEventID {get; set;}
        public DateTime FMDate {get; set;}
        
        public IFMEventDataHandler fMEventDataHandler {get; set;}
        public FMEvent()
        {
            fMEventDataHandler = new FMEventDataHandler();
        }
    }
}