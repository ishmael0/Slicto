using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackHost.DB_Migrations
{
    public partial class _2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductKeyword_Keywords_KeywordId",
                table: "ProductKeyword");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductKeyword_Products_ProductId",
                table: "ProductKeyword");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductKeyword",
                table: "ProductKeyword");

            migrationBuilder.RenameTable(
                name: "ProductKeyword",
                newName: "ProductKeywords");

            migrationBuilder.RenameIndex(
                name: "IX_ProductKeyword_KeywordId",
                table: "ProductKeywords",
                newName: "IX_ProductKeywords_KeywordId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductKeywords",
                table: "ProductKeywords",
                columns: new[] { "ProductId", "KeywordId" });

            migrationBuilder.AddForeignKey(
                name: "FK_ProductKeywords_Keywords_KeywordId",
                table: "ProductKeywords",
                column: "KeywordId",
                principalTable: "Keywords",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductKeywords_Products_ProductId",
                table: "ProductKeywords",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductKeywords_Keywords_KeywordId",
                table: "ProductKeywords");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductKeywords_Products_ProductId",
                table: "ProductKeywords");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductKeywords",
                table: "ProductKeywords");

            migrationBuilder.RenameTable(
                name: "ProductKeywords",
                newName: "ProductKeyword");

            migrationBuilder.RenameIndex(
                name: "IX_ProductKeywords_KeywordId",
                table: "ProductKeyword",
                newName: "IX_ProductKeyword_KeywordId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductKeyword",
                table: "ProductKeyword",
                columns: new[] { "ProductId", "KeywordId" });

            migrationBuilder.AddForeignKey(
                name: "FK_ProductKeyword_Keywords_KeywordId",
                table: "ProductKeyword",
                column: "KeywordId",
                principalTable: "Keywords",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductKeyword_Products_ProductId",
                table: "ProductKeyword",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
