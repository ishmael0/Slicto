using Core.DB;
using Core.Models;
using Core.StartUp;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace BackHost.DBs
{

    public class AccDB : BaseAccountDBContext<BaseApplicationUser, BaseApplicationRole>
    {
        public AccDB(DbContextOptions<AccDB> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
    public class MAINAccContextFactory : IDesignTimeDbContextFactory<AccDB>
    {
        public AccDB CreateDbContext(string[] args)
        {
            var o = AppSettingService.GetDbContextOptionsBuilder<AccDB>(nameof(BackHost));
            return new AccDB(o.Options);
        }
    }
}
