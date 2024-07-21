using Microsoft.EntityFrameworkCore;
using Models;

namespace Data;

public class PlayerStorage : IPlayerStorage
{
    private readonly DataContext _dataContext;

    public PlayerStorage(DataContext contextFromBuilder)
    {
        _dataContext = contextFromBuilder;

    }

    public async Task<Player> SetAsDrafted(Guid playerId, Guid managerId, int draftPosition)
    {
        Player playerToDraft = await _dataContext.players.FirstOrDefaultAsync(p => p.PlayerId == playerId);
        
        if (playerToDraft.ManagerId != null)
        {
            throw new Exception("Player is already drafted.");
        }
        else
        {
            DraftOrder draftOrder = await _dataContext.DraftOrder.FirstOrDefaultAsync(d => d.Overall_Pick == draftPosition);
            Manager manager = await _dataContext.managers.FirstOrDefaultAsync(m => m.ManagerId == managerId);
            
            draftOrder.PlayerId = playerId;
            playerToDraft.ManagerId = managerId;

            switch(playerToDraft.Position)
            {
                case "WR":
                    manager.WR_Count +=1;
                    break;
                case "QB":
                    manager.QB_Count +=1;
                    break;
                case "RB":
                    manager.RB_Count +=1;
                    break;
                case "TE":
                    manager.TE_Count +=1;
                    break;
                case "DST":
                    manager.DST_Count +=1;
                    break;
                case "K":
                    manager.K_Count +=1;
                    break;
                default: 
                    throw new Exception ("Position not found");                    
            }

            await _dataContext.SaveChangesAsync();
            return playerToDraft;
        }
    }

    public async Task<Player> UnDraft(int rank)
    {

        Player playerToUnDraft = await _dataContext.players.FirstOrDefaultAsync(p => p.Rank == rank);
        if (playerToUnDraft.ManagerId == null)
        {
            throw new Exception("Player is not drafted yet.");
        }
        else
        {
            playerToUnDraft.ManagerId = null;
            await _dataContext.SaveChangesAsync();
            return playerToUnDraft;
        }
    }

    public async Task<List<Player>> GetAllPlayers()
    {
        return await _dataContext.players.ToListAsync();
    }

    public async Task<Player> AddNewPlayer(Player newPlayer)
    {
       _dataContext.Add(newPlayer);
       await _dataContext.SaveChangesAsync();
       return newPlayer;

    }
}