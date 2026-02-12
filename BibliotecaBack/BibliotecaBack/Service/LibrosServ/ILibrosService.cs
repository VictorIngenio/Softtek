using BibliotecaBack.Models.Dto;
using BibliotecaBack.Models.Entities;

namespace BibliotecaBack.Service.LibrosServ
{
    public interface ILibrosService
    {
        void CrearLibroServ(Libro libro);
        void ActualizarLibroServ(Libro libro);
        Libro? TraerLibroServ(int id);
        IEnumerable<LibrosLista> TraerLibrosServ();
    }
}
