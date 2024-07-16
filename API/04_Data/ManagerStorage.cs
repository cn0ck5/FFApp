

using Microsoft.EntityFrameworkCore;
using Models;

namespace Data;

public class ManagerStorage : IManagerStorage
{

    private readonly DataContext _dataContext;

    public ManagerStorage(DataContext contextFromBuilder)
    {
        _dataContext = contextFromBuilder;

    }

    public async Task<Manager> CreateNewManager(Manager newManager)
    {
        _dataContext.managers.Add(newManager);
        await _dataContext.SaveChangesAsync();
        return newManager;
    }

    public async Task<bool> DoesManagerNameExist(string managerName)
    {
        return await _dataContext.managers.AnyAsync(e => e.TeamName == managerName);
    }

    public async Task<string> DeleteManager(string managerName)
    {
        Manager managerToDelete = await _dataContext.managers.FirstOrDefaultAsync(e => e.TeamName == managerName);
        _dataContext.managers.Remove(managerToDelete);
        await _dataContext.SaveChangesAsync();
        return "Deleted";
    }

    public async Task<Manager> SetDraftPos(int pos, string managerName)
    {
        bool posTaken = await _dataContext.managers.AnyAsync(n => n.Draft_Position == pos);
        if (posTaken)
        {
            throw new Exception("Draft Position is already taken.");
        }
        else
        {
            Manager managerToUpdate = await _dataContext.managers.FirstOrDefaultAsync(m => m.TeamName == managerName);
            managerToUpdate.Draft_Position = pos;
            await _dataContext.SaveChangesAsync();
            return managerToUpdate;
        }
    }

    public async Task<List<Manager>> GetAllManagers()
    {
        return await _dataContext.managers.ToListAsync();
    }

}