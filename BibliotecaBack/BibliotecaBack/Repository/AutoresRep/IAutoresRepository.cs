using BibliotecaBack.Models.Entities;

namespace BibliotecaBack.Repository.AutoresRep
{
    public interface IAutoresRepository
    {
        void CrearAutorRep(Autor autor);
        Autor? TraerAutorRep(int id);
        IEnumerable<Autor> TraerAutoresRep();
        void ActualizarAutorRep(Autor autor);
    }
}
