using Models;
using Data;

namespace Services;

public class ManagerService : IManagerService
{

    private readonly IManagerStorage _managerStorage;
    public ManagerService() { }

    public ManagerService(IManagerStorage efRepoFromBuilder)
    {
        _managerStorage = efRepoFromBuilder;
    }


    public async Task<Manager> CreateNewManager(Manager newManager)
    {
        if (!await _managerStorage.DoesManagerNameExist(newManager.TeamName))
        {
            await _managerStorage.CreateNewManager(newManager);
            return newManager;
        }
        else
        {
            throw new Exception("Manager Name already exists.");
        }
    }

    public async Task<string> DeleteManager(string managerName)
    {
        if (await _managerStorage.DoesManagerNameExist(managerName))
        {
            await _managerStorage.DeleteManager(managerName);
            return managerName;
        }
        else
        {
            throw new Exception("Manager name does not exist.");
        }
    }

    public async Task<Manager> SetDraftPos(int pos, string managerName)
    {
        if (await _managerStorage.DoesManagerNameExist(managerName))
        {
            Manager mangerToUpdate = await _managerStorage.SetDraftPos(pos, managerName);
            return mangerToUpdate;
        }
        else
        {
            throw new Exception("Manager name does not exist.");
        }
    }

    public async Task<List<Manager>> GetAllManagers()
    {
        return await _managerStorage.GetAllManagers();
    }

}