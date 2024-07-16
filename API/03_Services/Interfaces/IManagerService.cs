using Models;
namespace Services;

public interface IManagerService
{
    Task<Manager> CreateNewManager(Manager manager);
    Task<string> DeleteManager(string managerName);
    Task<Manager> SetDraftPos(int pos, string managerName);
    Task<List<Manager>> GetAllManagers();
}