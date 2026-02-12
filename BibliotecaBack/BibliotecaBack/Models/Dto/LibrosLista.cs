namespace BibliotecaBack.Models.Dto
{
    public class LibrosLista
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = string.Empty;
        public int Anno { get; set; }
        public string Genero { get; set; } = string.Empty;
        public int NumeroPaginas { get; set; }
        public string Autor { get; set; } = string.Empty;
    }
}
