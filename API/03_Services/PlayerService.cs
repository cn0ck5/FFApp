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

    public async Task<Player> SetAsDrafted(int rank, Guid managerId)
    {
        Player playerToDraft = await _playerStorage.SetAsDrafted(rank, managerId);
        return playerToDraft;
    }
    public async Task<Player> UnDraft(int rank)
    {
        Player playerToUnDraft = await _playerStorage.UnDraft(rank);
        return playerToUnDraft;
    }

    public async Task<List<Player>> GetAllPlayers()
    {
        return await _playerStorage.GetAllPlayers();
    }


}
