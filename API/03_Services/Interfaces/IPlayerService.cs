using Models;
namespace Services;

public interface IPlayerService
{
    Task<Player> SetAsDrafted(Guid playerId, Guid managerId, int draftPosition);
    Task<Player> UnDraft(int rank);
    Task<List<Player>> GetAllPlayers();
    Task<Player> AddNewPlayer(PlayerDTO player);
    Task<List<Player>> BatchAddNewPlayers(List<PlayerDTO> players);

}