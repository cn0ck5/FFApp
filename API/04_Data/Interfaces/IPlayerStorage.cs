using Models;

namespace Data;

public interface IPlayerStorage{

Task<Player> SetAsDrafted(Guid playerId, Guid managerId, int draftPosition);
Task<Player> UnDraft(int rank);

Task<List<Player>> GetAllPlayers();
Task<Player> AddNewPlayer(Player newPlayer);

}