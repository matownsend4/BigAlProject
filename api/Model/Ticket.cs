using System;
using api.Interfaces;
using api.Data;
namespace api.Model
{
    public class Ticket
    {
        public int TicketID {get; set;}
        public string TicketPrice {get; set;}
        public string TicketType {get; set;}
        public int CustomerID {get; set;}
         public int EventID {get; set;}
        public ITicketDataHandler ticketDataHandler {get; set;}
        public Ticket()
        {
            ticketDataHandler = new TicketDataHandler();
        }
    }
}