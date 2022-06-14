using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackHost.DB_Migrations
{
    public partial class _8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Labels_Colors_ColorId",
                table: "Labels");

            migrationBuilder.DropIndex(
                name: "IX_Labels_ColorId",
                table: "Labels");

            migrationBuilder.DropColumn(
                name: "ColorId",
                table: "Labels");

            migrationBuilder.AddColumn<string>(
                name: "Color",
                table: "Labels",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Color",
                table: "Labels");

            migrationBuilder.AddColumn<long>(
                name: "ColorId",
                table: "Labels",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_Labels_ColorId",
                table: "Labels",
                column: "ColorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Labels_Colors_ColorId",
                table: "Labels",
                column: "ColorId",
                principalTable: "Colors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
