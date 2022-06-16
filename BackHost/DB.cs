using Core.Controllers;
using Core.DB;
using Core.Models;
using Core.Services;
using Core.StartUp;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackHost.DBs
{
    public class LabelController : BaseController<DB, Label>
    {
        public LabelController(DB dbContext, UserPermissionManager upm, IOptions<AppSettingPrivates> options) : base(dbContext, upm, options)
        {
        }

        [NonAction]
        public override IQueryable<Label> BeforeGet(IQueryable<Label> q)
        {
            return base.BeforeGet(q).Include(c => c.Products);
        }
        [NonAction]
        public override void SetUpdate(Label t)
        {
            Extentions.AddUpdateDeleteChild(_context, _context.ProductLabels.Where(c => c.LabelId == t.Id).ToList(), t.Products.Select((c, i) => new ProductLabel { ProductId = c.Id, LabelId = t.Id }).ToList(), (t1, t2) => t1.ProductId == t2.ProductId);
            t.Products = null;
            base.SetUpdate(t);
        }



    }
    public class InvoiceController : BaseController<DB, Invoice>
    {
        public InvoiceController(DB dbContext, UserPermissionManager upm, IOptions<AppSettingPrivates> options) : base(dbContext, upm, options)
        {
        }
        public override IQueryable<Invoice> BeforeGet(IQueryable<Invoice> q)
        {
            return base.BeforeGet(q).Include(c => c.Customer);
        }
    }
    public class ProductController : BaseController<DB, Product>
    {
        public ProductController(DB dbContext, UserPermissionManager upm, IOptions<AppSettingPrivates> options) : base(dbContext, upm, options)
        {
        }
        [NonAction]
        public override void SetUpdate(Product t)
        {
            t.Types.ToList().ForEach(c => { c.ProductId = t.Id; });
            Extentions.AddUpdateDeleteChild(
                _context,
                _context.ProductTypes.Where(c => c.ProductId == t.Id).ToList(),
                t.Types,
                (t1, t2) => t1.Id == t2.Id);
            t.Types = null;

            Extentions.AddUpdateDeleteChild(
    _context,
    _context.ProductKeywords.Where(c => c.ProductId == t.Id).ToList(),
    t.KeyWords.Select((c, i) => new ProductKeyword { KeywordId = c.Id, ProductId = t.Id }).ToList(),
    (t1, t2) => t1.KeywordId == t2.KeywordId);
            t.KeyWords = null;


            Extentions.AddUpdateDeleteChild(
_context,
_context.ProductLabels.Where(c => c.ProductId == t.Id).ToList(),
t.Labels.Select((c, i) => new ProductLabel { LabelId = c.Id, ProductId = t.Id }).ToList(),
(t1, t2) => t1.LabelId == t2.LabelId);
            t.Labels = null;


            Extentions.AddUpdateDeleteChild(
_context,
_context.ProductProducts.Where(c => c.FromId == t.Id).ToList(),
t.RelatedFrom.Select((c, i) => new ProductProduct { ToId = c.Id, FromId = t.Id }).ToList(),
(t1, t2) => t1.ToId == t2.ToId);
            t.RelatedFrom = null;


            base.SetUpdate(t);
        }
        public override async Task<JR<Product>> GetSingle([FromQuery] int id)
        {
            var data = await ts
                .Include(c => c.Types)
                .Include(c => c.KeyWords)
                .Include(c => c.Labels)
                .Include(c => c.RelatedFrom)
                .FirstOrDefaultAsync(c => c.Id == id);
            if (data == null) return JR<Product>.FailureBadRequest();
            data.Types = data.Types.OrderBy(c => c.Order).ToList();
            data.KeyWords = data.KeyWords.OrderBy(c =>data.ProductKeyWords.FirstOrDefault(d=>d.KeywordId == c.Id)?.Order).ToList();
            data.Labels = data.Labels.OrderBy(c =>data.ProductLabels.FirstOrDefault(d=>d.LabelId == c.Id)?.Order).ToList();
            data.Labels = data.Labels.OrderBy(c =>data.ProductProductTo.FirstOrDefault(d=>d.FromId == c.Id)?.Order).ToList();
            return JR<Product>.OK(data);
        }
    }
}
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

    public class Message : BaseModelWithTitle
    {
        public string PhoneNumber { set; get; }

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
    [SafeToGetAll]
    public class Size : BaseModelWithTitle
    {
    }
    [SafeToGetAll]
    public class Model : BaseModelWithTitle
    {
    }
    [SafeToGetAll]
    public class Pattern : BaseModelWithTitle
    {
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

        //public  ICollection<Product> RelatedProducts { get; set; }
        //public virtual ICollection<ProductProduct> RelatedFrom { get; set; }
        public virtual ICollection<Product> RelatedTo { get; set; }
        public virtual ICollection<Product> RelatedFrom { get; set; }

        public IEnumerable<ProductProduct> ProductProductTo { get; set; }
        public IEnumerable<ProductProduct> ProductProductFrom { get; set; }

    }

    public class ProductProduct
    {
        public long FromId { get; set; }
        [ForeignKey("FromId")]
        public Product From { get; set; }

        public long ToId { get; set; }
        [ForeignKey("ToId")]
        public Product To { get; set; }
        public int Order { get;  set; }
    }


    public class Invoice : BaseModel
    {
        public long CustomerId { set; get; }
        [ForeignKey("CustomerId")]
        public virtual Customer Customer { set; get; }
        public Address? Address { get; set; }
        public List<OtherCostsOffsHelper> OtherCostsOffs { set; get; }
        public long Price { set; get; }
        public bool IsPaid { set; get; }
        public string Description { set; get; }
        public List<ProductTypeForInvoice> ProductTypesForInvoice { set; get; }
    }
    public class OtherCostsOffsHelper
    {
        public String Title { set; get; }
        public long Value { set; get; }
    }
    public class ProductTypeForBasket
    {
        public long ProductTypeId { set; get; }
        [NotMapped]
        public virtual ProductType ProductType { set; get; }
        //[ForeignKey("ProductTypeId")]
        //public ProductType ProductType { set; get; }
        public int Count { set; get; }
    }
    public class ProductTypeForInvoice : ProductTypeForBasket
    {
        public int Price { set; get; }
        public int Off { set; get; }
        [NotMapped]
        public long Total { get { return (Price - Off) * Count; } }
    }
    public class ProductType : BaseModel
    {
        public long ProductId { set; get; }
        [ForeignKey("ProductId")]
        public Product Product { set; get; }
        public string Title { set; get; }

        //[ForeignKey("ColorId")]
        //public Color Color { set; get; }
        public long? ColorId { set; get; }
        public long? PatternId { set; get; }

        //[ForeignKey("SizeId")]
        //public Size Size { set; get; }
        public long? SizeId { set; get; }

        //[ForeignKey("ModelId")]
        //public Model Model { set; get; }
        public long? ModelId { set; get; }


        public string? Decription { set; get; }
        public int Price { set; get; }
        public int Off { set; get; }
        public int SupplyCount { set; get; }
        public int SoldCount { set; get; }
        public int MaxAllowedBuy { set; get; }
        public int Order { get; set; }
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
        public string Color { set; get; }
        [NotMapped]
        public List<Product> Products { get; set; }
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
        public int Order { get;  set; }
    }
    public class ProductKeyword
    {
        public long ProductId { get; set; }
        [ForeignKey("ProductId")]
        public Product Product { get; set; }

        public long KeywordId { get; set; }
        [ForeignKey("KeywordId")]
        public Keyword Keyword { get; set; }
        public int Order { get;  set; }
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
        public ICollection<Invoice> Invoices { set; get; }

    }
    public class Address : BaseModel
    {
        public string? PostalCode { set; get; }
        public string Id { set; get; }
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
        public DbSet<Message> Message { set; get; }
        public DbSet<Keyword> Keywords { set; get; }
        public DbSet<Pattern> Patterns { set; get; }
        public DbSet<Product> Products { set; get; }
        public DbSet<ProductProduct> ProductProducts { set; get; }
        public DbSet<ProductKeyword> ProductKeywords { set; get; }
        public DbSet<Model> Models { set; get; }
        public DbSet<Size> Sizes { set; get; }
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
            modelBuilder.Entity<Invoice>().Property(e => e.Address).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<Address>(v));
            modelBuilder.Entity<Customer>().Property(e => e.Addresses).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<Address>>(v));
            modelBuilder.Entity<Brand>().Property(e => e.Images).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<Images>>(v));
            modelBuilder.Entity<Product>().Property(e => e.Images).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<Images>>(v));
            modelBuilder.Entity<Invoice>().Property(e => e.OtherCostsOffs).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<OtherCostsOffsHelper>>(v));
            //modelBuilder.Entity<Vahed>().Property(e => e.Gharardad).HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<Document>>(v));

            modelBuilder.Entity<Product>().HasMany(p => p.Labels).WithMany(p => p.Products).UsingEntity<ProductLabel>(
    j => j.HasOne(pt => pt.Label).WithMany(t => t.ProductLabels).HasForeignKey(pt => pt.LabelId),
    j => j.HasOne(pt => pt.Product).WithMany(p => p.ProductLabels).HasForeignKey(pt => pt.ProductId),
    j => { j.HasKey(t => new { t.ProductId, t.LabelId }); });




            modelBuilder.Entity<Product>().HasMany(p => p.KeyWords).WithMany(p => p.Products).UsingEntity<ProductKeyword>(
         j => j.HasOne(pt => pt.Keyword).WithMany(t => t.ProductKeyWords).HasForeignKey(pt => pt.KeywordId),
         j => j.HasOne(pt => pt.Product).WithMany(p => p.ProductKeyWords).HasForeignKey(pt => pt.ProductId),
         j => { j.HasKey(t => new { t.ProductId, t.KeywordId }); });


            modelBuilder.Entity<Product>().HasMany(p => p.RelatedFrom).WithMany(p => p.RelatedTo).UsingEntity<ProductProduct>(
        j => j.HasOne(pt => pt.To).WithMany(t => t.ProductProductFrom).HasForeignKey(pt => pt.ToId),
        j => j.HasOne(pt => pt.From).WithMany(p => p.ProductProductTo).HasForeignKey(pt => pt.FromId),
        j => { j.HasKey(t => new { t.ToId, t.FromId }); });

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
