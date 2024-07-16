using Models;

namespace Data;

public interface IManagerStorage
{
    Task<Manager> CreateNewManager(Manager manager);
    Task<bool> DoesManagerNameExist(string managerName);
    Task<string> DeleteManager(string managerName);
    Task<Manager> SetDraftPos(int pos, string managerName);
    Task<List<Manager>> GetAllManagers();
}