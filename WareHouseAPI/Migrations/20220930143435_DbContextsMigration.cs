using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WareHouseAPI.Migrations
{
    public partial class DbContextsMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tblInventories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    wareHouseID = table.Column<int>(type: "INTEGER", nullable: false),
                    inventoryName = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblInventories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tblWarehouses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    wareHouseName = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblWarehouses", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tblInventories");

            migrationBuilder.DropTable(
                name: "tblWarehouses");
        }
    }
}
