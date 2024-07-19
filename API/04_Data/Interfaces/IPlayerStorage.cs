using Models;

namespace Data;

public interface IPlayerStorage{

Task<Player> SetAsDrafted(int rank, Guid managerId);
Task<Player> UnDraft(int rank);

Task<List<Player>> GetAllPlayers();
Task<Player> AddNewPlayer(Player newPlayer);

}