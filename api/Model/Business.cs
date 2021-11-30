using System;
using api.Interfaces;
using api.Data;

namespace api.Model
{
    public class Business
    {
        public int BusinessID {get; set;}
        public string BusinessName {get; set;}
        public string BusinessType {get; set;}
        public string BusinessRevenue {get; set;}
        public string BusinessDescription {get; set;}
        public IBusinessDataHandler businessDataHandler {get; set;}
        public Business()
        {
            businessDataHandler = new BusinessDataHandler();
        }
    }
}