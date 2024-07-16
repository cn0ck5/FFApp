using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate_2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DST_Count",
                table: "managers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "K_Count",
                table: "managers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "QB_Count",
                table: "managers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RB_Count",
                table: "managers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TE_Count",
                table: "managers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WR_Count",
                table: "managers",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DST_Count",
                table: "managers");

            migrationBuilder.DropColumn(
                name: "K_Count",
                table: "managers");

            migrationBuilder.DropColumn(
                name: "QB_Count",
                table: "managers");

            migrationBuilder.DropColumn(
                name: "RB_Count",
                table: "managers");

            migrationBuilder.DropColumn(
                name: "TE_Count",
                table: "managers");

            migrationBuilder.DropColumn(
                name: "WR_Count",
                table: "managers");
        }
    }
}
