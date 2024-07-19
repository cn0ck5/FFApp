using Models;

namespace Data;

public interface IDraftOrderStorage
{
    Task<List<DraftOrder>> SetDraftOrder (int totalPicks);
    Task<DraftOrder> SetDraftedPlayer (int playerRank, int draftPosition, Guid managerId);
    int GetManagerCount();
    // Task<DraftOrder> SetManagerToPick(int pick);

}