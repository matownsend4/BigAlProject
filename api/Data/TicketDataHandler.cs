using api.Interfaces;
using api.Model;
using System.Collections.Generic;
using System.Dynamic;

namespace api.Data
{
    public class TicketDataHandler : ITicketDataHandler
    {
  private Database db;
        public TicketDataHandler()
        {
            db = new Database();
        }
        public void Delete(Ticket ticket)
        {
            string sql = "UPDATE ticket SET deleted = 'Y' WHERE ticket_id = @ticketid";
            var values = GetValues(ticket);
            db.Open();
            db.Update(sql, values);
            db.Close();
        }

        public void Insert(Ticket ticket)
        {
            string sql = "INSERT INTO ticket(ticket_id, ticket_type, ticket_price) VALUES(@ticketId, @ticketType, @ticketPrice)";
      
            var values = GetValues(ticket);
            db.Open();
            db.Insert(sql, values);
            db.Close();
        }

        public List<Ticket> Select()
        {
            db.Open();
            string sql = "SELECT * FROM ticket WHERE deleted = 'N'";
            List<ExpandoObject> results = db.Select(sql);

            List<Ticket> tickets = new List<Ticket>();

            foreach(dynamic item in results)
            {
                Ticket temp = new Ticket(){
                    TicketID = item.ticket_id,
                    TicketType = item.ticket_type,
                    TicketPrice = item.ticket_price,
                };
            tickets.Add(temp);
            }
            db.Close();
                       
            return tickets;
        }

        public void Update(Ticket ticket)
        {
            throw new System.NotImplementedException();
        }

        public Dictionary<string,object> GetValues(Ticket ticket)
        {
            var values = new Dictionary<string,object>(){
                {"@ticketId", ticket.TicketID},
                {"@ticketType", ticket.TicketType},
                {"@ticketPrice", ticket.TicketPrice},
            };
            return values;
        }
    }
}