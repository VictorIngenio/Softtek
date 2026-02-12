using System.ComponentModel.DataAnnotations.Schema;

namespace BibliotecaBack.Models.Entities
{
    public class Libro
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = string.Empty;
        public int Anno { get; set; }
        public string Genero { get; set; } = string.Empty;
        public int NumeroPaginas { get; set; }
        
        [ForeignKey("Autor")]
        public int IdAutor { get; set; }
        public Autor? Autor { get; set; }
    }
}
