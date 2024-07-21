using Models;
namespace Services;

public interface IDraftOrderService
{
    Task<List<DraftOrder>> SetDraftOrder(int rounds);

}