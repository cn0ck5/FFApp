using Models;
namespace Services;

public interface IPlayerService
{
    Task<Player> SetAsDrafted(int rank, Guid managerId);
    Task<Player> UnDraft(int rank);
    Task<List<Player>> GetAllPlayers();

}