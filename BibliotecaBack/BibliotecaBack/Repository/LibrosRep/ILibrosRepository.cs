using BibliotecaBack.Models.Dto;
using BibliotecaBack.Models.Entities;

namespace BibliotecaBack.Repository.LibrosRep
{
    public interface ILibrosRepository
    {
        void CrearLibroRep(Libro libro);
        void ActualizarLibroRep(Libro libro);
        Libro? TraerLibroRep(int id);
        IEnumerable<LibrosLista> TraerLibrosRep();
    }
}
