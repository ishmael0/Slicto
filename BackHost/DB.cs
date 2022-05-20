using Core.DB;
using Core.Models;
using Core.StartUp;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackHost.DBs
{
    [SafeToGetAll]
    public class Category : BaseModelWithTitle
    {
        public long? ParentCategoryId { set; get; }
        [ForeignKey("ParentCategoryId")]
        public Category? ParentCategory { set; get; }
        public string? Description { set; get; }
        public short Priority { set; get; }
    }
    [SafeToGetAll]
    public class Brand : BaseModelWithTitle
    {
        public List<Images> Images { set; get; }
        public string Description { set; get; }
        public string Summary { set; get; }
    }
    [SafeToGetAll]
    public class Color : BaseModelWithTitle
    {
        public string Value { set; get; }
    }
    public class Keyword : BaseModelWithTitle
    {
        public ICollection<Product> Products { set; get; }
        public IEnumerable<ProductKeyword> ProductKeyWords { set; get; }
    }
    public class Product : BaseModelWithTitle
    {
        public long CategoryId { set; get; }
        [ForeignKey("CategoryId")]
        public virtual Category Category { set; get; }
        public string? Summary { set; get; }
        public string? Description { set; get; }
        public List<Images> Images { set; get; }


        public ICollection<ProductType> Types { set; get; }
        public ICollection<Keyword> KeyWords { set; get; }
        public IEnumerable<ProductKeyword> ProductKeyWords { set; get; }
        public ICollection<Label> Labels { set; get; }
        public IEnumerable<ProductLabel> ProductLabels { get; set; }

    }
    public class Invoice : BaseModelWithTitle
    {
        public long CustomerId { set; get; }
        [ForeignKey("CustomerId")]
        public virtual Customer Customer { set; get; }
        public virtual Address Address { get; set; }
        public int PostPrice { set; get; }
        public int Price { set; get; }
        public bool IsPaid { set; get; }
        public string Description { set; get; }
        public List<ProductTypeForInvoice> ProductTypesForInvoice { set; get; }
    }
    public class ProductTypeForBasket
    {
        public long ProductTypeId { set; get; }
        //[ForeignKey("ProductTypeId")]
        //public ProductType ProductType { set; get; }
        public int Count { set; get; }

    }
    public class ProductTypeForInvoice: ProductTypeForBasket
    {
        public int Price { set; get; }
        public int Off { set; get; }
    }
    public class ProductType : BaseModel
    {
        public long ProductId { set; get; }
        [ForeignKey("ProductId")]
        public Product Product { set; get; }
        public string Title { set; get; }
        [ForeignKey("ColorId")]
        public Color Color { set; get; }
        public long ColorId { set; get; }
        public string? Decription { set; get; }
        public int Price { set; get; }
        public int Off { set; get; }
        public int SupplyCount { set; get; }
        public int SoldCount { set; get; }
        public int MaxAllowedBuy { set; get; }
    }
    public class Basket : BaseModel
    {
        public long CustomerId { set; get; }
        [ForeignKey("CustomerId")]
        public virtual Customer Customer { set; get; }
        public List<ProductTypeForBasket> ProductTypesForBasket { set; get; }

    }

    [SafeToGetAll]
    public class Label : BaseModelWithTitle
    {
        [ForeignKey("ColorId")]
        public Color Color { set; get; }
        public long ColorId { set; get; }
        public ICollection<Product> Products { set; get; }
        public List<ProductLabel> ProductLabels { get; set; }
    }
    [SafeToGetAll]
    public class ProductLabel
    {
        [NotMapped]
        public virtual string Title { get; set; }
        public long ProductId { get; set; }
        [ForeignKey("ProductId")]
        public Product Product { get; set; }

        public long LabelId { get; set; }
        [ForeignKey("LabelId")]
        public Label Label { get; set; }
        public int Priority { set; get; }
    }
    public class ProductKeyword
    {
        public long ProductId { get; set; }
        [ForeignKey("ProductId")]
        public Product Product { get; set; }

        public long KeywordId { get; set; }
        [ForeignKey("KeywordId")]
        public Keyword Keyword { get; set; }
    }
    public class ProductProduct
    {
        public int ProductId { get; set; }
        [ForeignKey("ProductId")]
        public Product Product { get; set; }

        public int RelatedProductId { get; set; }
        [ForeignKey("RelatedProductId")]
        public Product RelatedProduct { get; set; }
    }
    public class Images
    {
        public string Path { set; get; }
        public string Description { set; get; }
    }
    public class Customer : BaseModel
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Password { get; set; }
        public bool PhoneNumberConfirm { get; set; }
        public List<Address> Addresses { get; set; }
    }
    public class Address : BaseModelWithTitle
    {
        public string? PostalCode { set; get; }
        public string? Province { set; get; }
        public long ProvinceId { set; get; }
        public string? City { set; get; }
        public long CityId { set; get; }
        public string? FullAddress { set; get; }
        public string? Latitude { set; get; }
        public string? Longitude { set; get; }
    }
    [SafeToGetAll]
    public class Province : BaseModelWithTitle
    {
    }
    [SafeToGetAll]
    public class City : BaseModelWithTitle
    {
        [ForeignKey("ProvinceId")]
        public virtual Province Province { set; get; }
        public long ProvinceId { set; get; }
    }
    public class DB : BaseWebSiteDBContext
    {
        public DbSet<Province> Provinces { set; get; }
        public DbSet<City> Cities { set; get; }
        public DbSet<Category> Categories { set; get; }
        public DbSet<Brand> Brands { set; get; }
        public DbSet<Color> Colors { set; get; }
        public DbSet<Keyword> Keywords { set; get; }
        public DbSet<Product> Products { set; get; }
        public DbSet<Invoice> Invoices { set; get; }
        public DbSet<ProductType> ProductTypes { set; get; }
        public DbSet<Label> Labels { set; get; }
        public DbSet<ProductLabel> ProductLabels { set; get; }
        public DbSet<Customer> Customer { set; get; }
        public DB(DbContextOptions<DB> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Basket>().Property(e => e.ProductTypesForBasket).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<ProductTypeForBasket>>(v));
            modelBuilder.Entity<Invoice>().Property(e => e.ProductTypesForInvoice).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<ProductTypeForInvoice>>(v));
            modelBuilder.Entity<Customer>().Property(e => e.Addresses).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<Address>>(v));
            modelBuilder.Entity<Brand>().Property(e => e.Images).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<Images>>(v));
            modelBuilder.Entity<Product>().Property(e => e.Images).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<Images>>(v));
            //modelBuilder.Entity<Vahed>().Property(e => e.Gharardad).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<Document>>(v));

            modelBuilder.Entity<Product>().HasMany(p => p.Labels).WithMany(p => p.Products).UsingEntity<ProductLabel>(
    j => j.HasOne(pt => pt.Label).WithMany(t => t.ProductLabels).HasForeignKey(pt => pt.LabelId),
    j => j.HasOne(pt => pt.Product).WithMany(p => p.ProductLabels).HasForeignKey(pt => pt.ProductId),
    j => { j.HasKey(t => new { t.ProductId, t.LabelId }); });


            modelBuilder.Entity<Product>().HasMany(p => p.KeyWords).WithMany(p => p.Products).UsingEntity<ProductKeyword>(
         j => j.HasOne(pt => pt.Keyword).WithMany(t => t.ProductKeyWords).HasForeignKey(pt => pt.KeywordId),
         j => j.HasOne(pt => pt.Product).WithMany(p => p.ProductKeyWords).HasForeignKey(pt => pt.ProductId),
         j => { j.HasKey(t => new { t.ProductId, t.KeywordId }); });
        }
    }
    public class MAINDBContextFactory : IDesignTimeDbContextFactory<DB>
    {
        public DB CreateDbContext(string[] args)
        {
            var o = AppSettingService.GetDbContextOptionsBuilder<DB>(nameof(BackHost));
            return new DB(o.Options);
        }
    }
}
