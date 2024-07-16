using Microsoft.EntityFrameworkCore;
namespace Models;

public class DataContext : DbContext
{
    public DbSet<Player> players { get; set; }
    public DbSet<Manager> managers { get; set; }


public DataContext() {}

public DataContext(DbContextOptions options) : base(options) { }

}
