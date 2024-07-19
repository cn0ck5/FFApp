using Models;
namespace Services;

public interface IDraftOrderService
{
    Task<List<DraftOrder>> SetDraftOrder(int rounds);
    Task<DraftOrder> DraftPlayer(int playerRank, int draftPosition, Guid managerId);

}