using Models;
namespace Services;

public interface IPlayerService
{
    Task<Player> SetAsDrafted(int rank);
    Task<List<Player>> GetAllPlayers();

}