using Models;
using Data;

namespace Services;

public class DraftOrderService : IDraftOrderService
{

    private readonly IDraftOrderStorage _draftStorage;
    public DraftOrderService() { }

    public DraftOrderService(IDraftOrderStorage efRepoFromBuilder)
    {
        _draftStorage = efRepoFromBuilder;
    }

    public async Task<List<DraftOrder>> SetDraftOrder (int rounds)
    {
        int managerCount = await _draftStorage.GetManagerCount();
        int totalPicks = managerCount * rounds;

        return await _draftStorage.SetDraftOrder(totalPicks);
    }
}