using Models;

namespace Data;

public interface IPlayerStorage{

Task<Player> SetAsDrafted(int rank);

Task<List<Player>> GetAllPlayers();

}