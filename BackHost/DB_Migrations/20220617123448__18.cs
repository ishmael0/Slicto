using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackHost.DB_Migrations
{
    public partial class _18 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Option",
                table: "Option");

            migrationBuilder.RenameTable(
                name: "Option",
                newName: "OptionS");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OptionS",
                table: "OptionS",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_OptionS",
                table: "OptionS");

            migrationBuilder.RenameTable(
                name: "OptionS",
                newName: "Option");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Option",
                table: "Option",
                column: "Id");
        }
    }
}
