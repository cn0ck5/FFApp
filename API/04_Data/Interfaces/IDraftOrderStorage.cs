using Models;

namespace Data;

public interface IDraftOrderStorage
{
    Task<List<DraftOrder>> SetDraftOrder (int totalPicks);
    int GetManagerCount();

}