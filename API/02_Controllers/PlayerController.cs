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


}