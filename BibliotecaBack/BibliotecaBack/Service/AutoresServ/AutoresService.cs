using BibliotecaBack.Models.Entities;
using BibliotecaBack.Repository.AutoresRep;

namespace BibliotecaBack.Service.AutoresServ
{
    public class AutoresService(IAutoresRepository repository) : IAutoresService
    {
        private readonly IAutoresRepository _repository = repository;

        public void ActualizarAutorServ(Autor autor)
        {
            try
            {
                _repository.ActualizarAutorRep(autor);
            }
            catch (Exception e)
            {
                Console.WriteLine("ActualizarAutorServ: {mensaje}", e.Message);
            }
        }

        public void CrearAutorServ(Autor autor)
        {
            try
            {
                _repository.CrearAutorRep(autor);
            }
            catch (Exception e)
            {
                Console.WriteLine("CrearAutorServ: {mensaje}", e.Message);
            }
        }

        public IEnumerable<Autor> TraerAutoresServ()
        {
            try
            {
                return _repository.TraerAutoresRep();
            }
            catch (Exception e)
            {
                Console.WriteLine("TraerAutoresServ: {mensaje}", e.Message);
                return [];
            }
        }

        public Autor? TraerAutorServ(int id)
        {
            try
            {
                return _repository.TraerAutorRep(id);
            }
            catch (Exception e)
            {
                Console.WriteLine("TraerAutorServ: {mensaje}", e.Message);
                return null;
            }
        }
    }
}
