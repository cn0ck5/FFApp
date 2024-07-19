
using System.ComponentModel.DataAnnotations;

namespace Models;

    public class Player
    {
    [Key]
    public Guid PlayerId{get;set;} = Guid.NewGuid();
    public int Rank {get; set;}
    public string Player_Name {get; set;}
    public string Team {get; set;}

    public string Position {get; set;}
    public int PosRk{get; set;}
    public int Bye {get; set;}
    public Guid? ManagerId {get; set;} = new();


    public Player () {}

    public Player (PlayerDTO playerDto) 
    {
        Rank = playerDto.Rank;
        Player_Name = playerDto.Player_Name;
        Team = playerDto.Team;
        Position = playerDto.Position;
        PosRk = playerDto.PosRk;
        Bye = playerDto.Bye;
        ManagerId = null;
    }

    }