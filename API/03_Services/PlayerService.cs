using Models;
using Data;

namespace Services;

public class PlayerService : IPlayerService
{
    private readonly IPlayerStorage _playerStorage;
    public PlayerService() { }

    public PlayerService(IPlayerStorage efRepoFromBuilder)
    {
        _playerStorage = efRepoFromBuilder;
    }

    public async Task<Player> SetAsDrafted(int rank)
    {

    }

    public async Task<List<Player>> GetAllPlayers()
    {
        
    }


}
