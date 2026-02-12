using BibliotecaBack.Models.Context;
using BibliotecaBack.Models.Dto;
using BibliotecaBack.Models.Entities;

namespace BibliotecaBack.Repository.LibrosRep
{
    public class LibrosRepository(BibliotecaContext context) : ILibrosRepository
    {
        private readonly BibliotecaContext _context = context;

        public void ActualizarLibroRep(Libro libro)
        {
            try
            {
                _context.Update(libro);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine("ActualizarLibroRep: {mensaje}", e.Message);
            }
        }

        public void CrearLibroRep(Libro libro)
        {
            try
            {
                _context.Libros.Add(libro);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine("CrearLibroRep: {mensaje}", e.Message);
            }
        }

        public Libro? TraerLibroRep(int id)
        {
            try
            {
                Libro? libro = _context.Libros.Where(x => x.Id == id).FirstOrDefault();
                return libro;
            }
            catch (Exception e)
            {
                Console.WriteLine("TraerLibroRep: {mensaje}", e.Message);
                return null;
            }
        }

        public IEnumerable<LibrosLista> TraerLibrosRep()
        {
            try
            {
                List<LibrosLista> consulta = new();

                consulta = (from lib in _context.Libros
                            join aut in _context.Autors on lib.IdAutor equals aut.Id
                            select new LibrosLista 
                            {
                                Id = lib.Id,
                                Titulo = lib.Titulo,
                                Anno = lib.Anno,
                                Genero = lib.Genero,
                                NumeroPaginas = lib.NumeroPaginas,
                                Autor = aut.NombreCompleto
                            }).ToList();

                return consulta;
            }
            catch (Exception e)
            {
                Console.WriteLine("TraerLibroRep: {mensaje}", e.Message);
                return [];
            }
        }
    }
}
