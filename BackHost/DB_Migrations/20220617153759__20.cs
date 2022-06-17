using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackHost.DB_Migrations
{
    public partial class _20 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProductTypeOptionTypes",
                columns: table => new
                {
                    ProductTypeId = table.Column<long>(type: "bigint", nullable: false),
                    OptionTypeId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductTypeOptionTypes", x => new { x.OptionTypeId, x.ProductTypeId });
                    table.ForeignKey(
                        name: "FK_ProductTypeOptionTypes_OptionTypes_OptionTypeId",
                        column: x => x.OptionTypeId,
                        principalTable: "OptionTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductTypeOptionTypes_ProductTypes_ProductTypeId",
                        column: x => x.ProductTypeId,
                        principalTable: "ProductTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductTypeOptionTypes_ProductTypeId",
                table: "ProductTypeOptionTypes",
                column: "ProductTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductTypeOptionTypes");
        }
    }
}
