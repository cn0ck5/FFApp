using System.ComponentModel.DataAnnotations;
namespace Models;

public class Manager
{
    [Key]
    public  Guid ManagerId { get; set; }
    public  string TeamName { get; set; }
    public  int Draft_Position { get; set; }
    public  int QB_Count { get; set; }
    public  int RB_Count { get; set; }
    public  int WR_Count { get; set; }
    public  int TE_Count { get; set; }
    public  int DST_Count { get; set; }
    public  int K_Count { get; set; }

    public Manager (){}

    public Manager(string teamName)
    {
        ManagerId = Guid.NewGuid();
        TeamName = teamName;
        Draft_Position = 0;
        QB_Count = 0;
        RB_Count = 0;
        WR_Count = 0;
        TE_Count = 0;
        DST_Count = 0;
        K_Count = 0;
    }
}