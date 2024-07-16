
using System.ComponentModel.DataAnnotations;

namespace Models;

    public class Player
    {
    [Key]
    public required int Rank {get; set;}
    public required string Player_Name {get; set;}
    public required string Team {get; set;}

    public required string Position {get; set;}
    public required int PosRk{get; set;}
    public required int Bye {get; set;}
    public Guid? ManagerId {get; set;} = new();

    }