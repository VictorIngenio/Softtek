using BibliotecaBack.Models.Dto;
using BibliotecaBack.Models.Entities;
using BibliotecaBack.Repository.LibrosRep;

namespace BibliotecaBack.Service.LibrosServ
{
    public class LibrosService(ILibrosRepository repository) : ILibrosService
    {
        private readonly ILibrosRepository _repository = repository;

        public void ActualizarLibroServ(Libro libro)
        {
            try
            {
                _repository.ActualizarLibroRep(libro);
            }
            catch (Exception e)
            {
                Console.WriteLine("ActualizarLibroServ: {mensaje}", e.Message);
            }
        }

        public void CrearLibroServ(Libro libro)
        {
            try
            {
                _repository.CrearLibroRep(libro);
            }
            catch (Exception e)
            {
                Console.WriteLine("CrearLibroServ: {mensaje}", e.Message);
            }
        }

        public Libro? TraerLibroServ(int id)
        {
            try
            {
                return _repository.TraerLibroRep(id);
            }
            catch (Exception e)
            {
                Console.WriteLine("TraerLibroServ: {mensaje}", e.Message);
                return null;
            }
        }

        public IEnumerable<LibrosLista> TraerLibrosServ()
        {
            try
            {
                return _repository.TraerLibrosRep();
            }
            catch (Exception e)
            {
                Console.WriteLine("TraerLibrosServ: {mensaje}", e.Message);
                return [];
            }
        }
    }
}
