using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class InitalCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DraftOrder",
                columns: table => new
                {
                    PointlessId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Round = table.Column<int>(type: "int", nullable: false),
                    RoundPick = table.Column<int>(type: "int", nullable: false),
                    Overall_Pick = table.Column<int>(type: "int", nullable: false),
                    ManagerId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PlayerId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DraftOrder", x => x.PointlessId);
                });

            migrationBuilder.CreateTable(
                name: "managers",
                columns: table => new
                {
                    ManagerId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TeamName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Draft_Position = table.Column<int>(type: "int", nullable: false),
                    QB_Count = table.Column<int>(type: "int", nullable: false),
                    RB_Count = table.Column<int>(type: "int", nullable: false),
                    WR_Count = table.Column<int>(type: "int", nullable: false),
                    TE_Count = table.Column<int>(type: "int", nullable: false),
                    DST_Count = table.Column<int>(type: "int", nullable: false),
                    K_Count = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_managers", x => x.ManagerId);
                });

            migrationBuilder.CreateTable(
                name: "players",
                columns: table => new
                {
                    PlayerId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Rank = table.Column<int>(type: "int", nullable: false),
                    Player_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Team = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Position = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PosRk = table.Column<int>(type: "int", nullable: false),
                    Bye = table.Column<int>(type: "int", nullable: false),
                    ManagerId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_players", x => x.PlayerId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DraftOrder");

            migrationBuilder.DropTable(
                name: "managers");

            migrationBuilder.DropTable(
                name: "players");
        }
    }
}
