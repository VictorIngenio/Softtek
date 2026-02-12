using BibliotecaBack.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace BibliotecaBack.Models.Context
{
    public class BibliotecaContext : DbContext
    {
        public DbSet<Libro> Libros { get; set; }
        public DbSet<Autor> Autors { get; set; }

        public BibliotecaContext(DbContextOptions<BibliotecaContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Libro>().HasKey(c => c.Id);
            modelBuilder.Entity<Autor>().HasKey(c => c.Id);
        }
    }
}
