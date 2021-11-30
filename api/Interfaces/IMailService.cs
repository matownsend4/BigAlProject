using System.Threading.Tasks;
using api.Model;

namespace api.Interfaces
{
    public interface IMailService
    {
        Task SendEmailAsync(MailRequest mailRequest);
        Task SendWelcomeEmailAsync(WelcomeRequest request);
        Task SendConfirmationEmailAsync(ConfirmationRequest request);
    }
}