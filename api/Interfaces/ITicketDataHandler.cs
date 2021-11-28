using System;
using System.Collections.Generic;
using api.Model;
namespace api.Interfaces
{
    public interface ITicketDataHandler
    {
         public List<Ticket> Select();
        public void Delete(Ticket ticket);
        public void Update(Ticket ticket);
        public void Insert(Ticket ticket);
    }
}