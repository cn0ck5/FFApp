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

    public async Task<Player> SetAsDrafted(int rank, Guid ){

    }

    public async Task<List<Player>> GetAllPlayers(){

        return await _dataContext.players.ToListAsync();

    }



}