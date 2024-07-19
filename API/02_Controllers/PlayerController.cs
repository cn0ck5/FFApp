using Microsoft.AspNetCore.Mvc;
using Services;
using Models;

[ApiController]

public class PlayerController : ControllerBase
{
    private readonly IPlayerService _playerService;

    public PlayerController(IPlayerService playerServiceFromBuilder)
    {
        _playerService = playerServiceFromBuilder;
    }

    [HttpPatch("Player/DraftPlayer")]
    public async Task<ActionResult<Player>> SetAsDrafted(int rank, Guid managerId)
    {
        try
        {
            Player playertoDraft = await _playerService.SetAsDrafted(rank, managerId);
            return Ok(playertoDraft);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
    [HttpPatch("Player/UnDraftPlayer")]
    public async Task<ActionResult<Player>> UnDraft(int rank)
    {
        try
        {
            Player playertoUnDraft = await _playerService.UnDraft(rank);
            return Ok(playertoUnDraft);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("Player/GetAllPlayers")]
    public async Task<ActionResult<List<Player>>> GetAllPlayers()
    {
        try
        {
            List<Player> allPlayers = await _playerService.GetAllPlayers();
            return Ok(allPlayers);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost("Player/AddPlayer")]
    public async Task<ActionResult<Player>> AddPlayer(PlayerDTO player)
    {
        try
        {
            Player newPlayer = await _playerService.AddNewPlayer(player);
            return Ok(newPlayer);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost("Player/AddBatchPlayers")]
    public async Task<ActionResult<Player>> AddBatchPlayers(List<PlayerDTO> players)
    {
        try
        {
            List<Player> newPlayers = await _playerService.BatchAddNewPlayers(players);
            return Ok(newPlayers);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }

    }


}