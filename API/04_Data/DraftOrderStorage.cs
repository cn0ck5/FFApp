using Microsoft.EntityFrameworkCore;
using Models;

namespace Data;

public class DraftOrderStorage : IDraftOrderStorage
{

    private readonly DataContext _dataContext;

    public DraftOrderStorage(DataContext contextFromBuilder)
    {
        _dataContext = contextFromBuilder;

    }

    public async Task<List<DraftOrder>> SetDraftOrder(int totalPicks)
    {
        List<DraftOrder> draftList = new();
        int managerCount = await GetManagerCount();
        int pickOrder = 0;
        for (int i = 1; i < totalPicks+1; i++)
        {
            int round = (int)Math.Ceiling((double)i / managerCount);
            if (round % 2 == 0)
            {
                //some code to execute if even (players*round)-(overall+1)
                pickOrder = (managerCount * round) - i + 1;
            }
            else
            {
                //some code to execute if odd -- players - (players *round - overall)
                pickOrder = managerCount - (managerCount * round - i);
            }
            Manager managerToSet = await _dataContext.managers.FirstOrDefaultAsync(m => m.Draft_Position == pickOrder);
            if (managerToSet == null)
            {
                throw new Exception($"There is no owner assigned to pick # {pickOrder}");
            }
            else
            {
                int roundPick = managerCount-(managerCount*round-i);   
                DraftOrder draftOrder = new(i, round, roundPick, managerToSet.ManagerId);
                draftList.Add(draftOrder);
            }
        }

        foreach(DraftOrder d in draftList)
        {
            _dataContext.DraftOrder.Add(d);
        }
        await _dataContext.SaveChangesAsync();

        return draftList;
        

    }

    public async Task<DraftOrder> SetDraftedPlayer(int playerRank, int draftPosition, Guid managerId)
    {
        Manager managerToUpdate = await _dataContext.managers.FirstOrDefaultAsync(m => m.ManagerId == managerId);
        Player  playerToSet = await _dataContext.players.FirstOrDefaultAsync(p => p.Rank == playerRank);
        DraftOrder draft = await _dataContext.DraftOrder.FirstOrDefaultAsync(d => d.Overall_Pick == draftPosition);
        draft.PlayerId = playerToSet.PlayerId;

        return draft;


    }

    public async Task<int> GetManagerCount()
    {
       return await _dataContext.managers.CountAsync();
    }

    // public Task<DraftOrder> SetManagerToPick(int pick)
    // {

    // }





}