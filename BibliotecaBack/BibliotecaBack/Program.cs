using BibliotecaBack.Models.Context;
using BibliotecaBack.Repository.AutoresRep;
using BibliotecaBack.Repository.LibrosRep;
using BibliotecaBack.Service.AutoresServ;
using BibliotecaBack.Service.LibrosServ;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var conexion = builder.Configuration.GetConnectionString("BibliotecaConnection");

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(option => option.AddPolicy("AllowAll", p => p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
builder.Services.AddDbContext<BibliotecaContext>(option => option.UseSqlServer(conexion));

builder.Services.AddTransient<IAutoresRepository, AutoresRepository>();
builder.Services.AddTransient<IAutoresService, AutoresService>();
builder.Services.AddTransient<ILibrosRepository, LibrosRepository>();
builder.Services.AddTransient<ILibrosService, LibrosService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers();

app.Run();
