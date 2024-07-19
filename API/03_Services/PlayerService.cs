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

    public async Task<Player> AddNewPlayer(PlayerDTO playerDTO)
    {
        Player newPlayer = new(playerDTO);
        await _playerStorage.AddNewPlayer(newPlayer);
        return newPlayer;
    }

    public async Task<List<Player>> BatchAddNewPlayers(List<PlayerDTO> players)
    {
        List<Player> newPlayers = new();
        foreach(PlayerDTO p in players)
        {
            Player newPlayer = new(p);
            newPlayers.Add(newPlayer);
            await _playerStorage.AddNewPlayer(newPlayer);
        }

        return newPlayers;
    }


}
