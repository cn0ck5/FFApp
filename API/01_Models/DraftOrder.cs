
using System.ComponentModel.DataAnnotations;

namespace Models;
public class DraftOrder 
{
    [Key]
    public Guid PointlessId {get;set;} = Guid.NewGuid();
    public int Round {get;set;}
    public int RoundPick{get;set;}
    public int Overall_Pick {get; set;}
    public Guid ManagerId {get;set;} = new();
    public Guid? PlayerId {get; set;} = new();

    public DraftOrder () {} 


    public DraftOrder(int overallPick, int round, int roundPick, Guid managerId)
    {
        PointlessId = Guid.NewGuid();
        Overall_Pick = overallPick;
        Round = round;
        RoundPick = roundPick;
        ManagerId = managerId;
        PlayerId = null;
    }
}