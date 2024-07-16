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

    public async Task<Player> SetAsDrafted(int rank, Guid managerId)
    {
        Player playerToDraft = await _dataContext.players.FirstOrDefaultAsync(p => p.Rank == rank);
        if (playerToDraft.ManagerId != null)
        {
            throw new Exception("Player is already drafted.");
        }
        else
        {
            playerToDraft.ManagerId = managerId;
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
}