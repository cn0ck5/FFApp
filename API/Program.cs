using Microsoft.EntityFrameworkCore;
using Models; // Adjust the namespace according to your project structure
using Data;
using Services;

var builder = WebApplication.CreateBuilder(args);

var myBadCORSPolicy = "_badCorsPolicy";
builder.Services.AddCors(options => {
    options.AddPolicy(name: myBadCORSPolicy,
                        policy =>
                        {
                            policy.AllowAnyOrigin(); // this allows incoming requests from anywhere
                            policy.AllowAnyMethod(); // this allows any methods to be used
                            policy.AllowAnyHeader(); // this allows any headers
                        });
});

// Read the connection string from a file
string connectionString = File.ReadAllText(@"C:\Repos\FantasyFootball\FFApp\ConnectionString.txt");
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddScoped<IManagerStorage, ManagerStorage>();
builder.Services.AddScoped<IManagerService, ManagerService>();
builder.Services.AddScoped<IPlayerStorage, PlayerStorage>();
builder.Services.AddScoped<IPlayerService, PlayerService>();
builder.Services.AddScoped<IDraftOrderService, DraftOrderService>();
builder.Services.AddScoped<IDraftOrderStorage, DraftOrderStorage>();

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseCors(myBadCORSPolicy);

app.UseAuthorization();

app.MapControllers();

app.Run();
