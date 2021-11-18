using System;
using System.Collections.Generic;
using api.Model;
namespace api.Interfaces
{
    public interface IFMEventDataHandler
    {
        public List<FMEvent> Select();
        public void Delete(FMEvent fMEvent);
        public void Update(FMEvent fMEvent);
        public void Insert(FMEvent fMEvent);
    }
}