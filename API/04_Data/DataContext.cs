using Microsoft.EntityFrameworkCore;
namespace Models;

public class DataContext : DbContext
{
    public DbSet<Player> players { get; set; }
    public DbSet<Manager> managers { get; set; }
    public DbSet<DraftOrder> DraftOrder { get; set; }

    public DataContext() { }

    public DataContext(DbContextOptions options) : base(options) { }

     protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<DraftOrder>()
            .HasKey(d => d.PointlessId);

        modelBuilder.Entity<DraftOrder>()
            .Property(d => d.PlayerId)
            .IsRequired(false); // Explicitly configure PlayerId as nullable

        // Other configurations if necessary
    }


}


