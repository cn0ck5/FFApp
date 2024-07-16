using Microsoft.AspNetCore.Mvc;
using Services;
using Models;

[ApiController]

public class ManagerController : ControllerBase
{
    private readonly IManagerService _managerService;

    public ManagerController(IManagerService managerServiceFromBuilder)
    {
        _managerService = managerServiceFromBuilder;
    }

    [HttpPost("Manager/NewManager")]
    public async Task<ActionResult<Manager>> CreateNewManager(string managerName)
    {
        try
        {
            Manager newManager = new(managerName);
            await _managerService.CreateNewManager(newManager);
            return Ok(newManager);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpDelete("Manager/Delete")]
    public async Task<ActionResult<string>> DeleteManager(string managerName)
    {
        try
        {
            await _managerService.DeleteManager(managerName);
            return Ok($"{managerName} was deleted.");
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPatch("Manager/SetDraftPosition")]
    public async Task<ActionResult<Manager>> SetDraftPos(int pos, string managerName)
    {
        try
        {
            Manager managerToUpdate = await _managerService.SetDraftPos(pos, managerName);
            return Ok(managerToUpdate);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("Manager/GetAllManagers")]
    public async Task<ActionResult<List<Manager>>> GetAllManagers()
    {
        List<Manager> managerList =  await _managerService.GetAllManagers();
        return Ok(managerList);
    }
}