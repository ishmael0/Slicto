global using Core;
global using Core.DB;
global using Core.StartUp;
global using Core.Models;
using Microsoft.EntityFrameworkCore.Design;
using BackHost.DBs;
using BackHost.Seed;

var builder = WebApplication.CreateBuilder(args);
var startup = new BaseStartup<AccDB, BaseApplicationUser, BaseApplicationRole>(builder.Configuration, builder.Environment);
startup.ConfigureServices(builder.Services, builder.Host);
var app = builder.Build();
startup.Configure(app, builder.Environment, app.Services);
startup.Seed.CustomSeed(new List<Func<IServiceProvider, Task<bool>>> {
    SeedClass.AddProvincesAndCitiesAsync
});
app.Run();
