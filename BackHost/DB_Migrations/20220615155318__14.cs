using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackHost.DB_Migrations
{
    public partial class _14 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductProducts_Products_FromId",
                table: "ProductProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductProducts_Products_ToId",
                table: "ProductProducts");

            migrationBuilder.CreateTable(
                name: "Message",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<short>(type: "smallint", nullable: false),
                    Create = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Message", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_ProductProducts_Products_FromId",
                table: "ProductProducts",
                column: "FromId",
                principalTable: "Products",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductProducts_Products_ToId",
                table: "ProductProducts",
                column: "ToId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductProducts_Products_FromId",
                table: "ProductProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductProducts_Products_ToId",
                table: "ProductProducts");

            migrationBuilder.DropTable(
                name: "Message");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductProducts_Products_FromId",
                table: "ProductProducts",
                column: "FromId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductProducts_Products_ToId",
                table: "ProductProducts",
                column: "ToId",
                principalTable: "Products",
                principalColumn: "Id");
        }
    }
}
