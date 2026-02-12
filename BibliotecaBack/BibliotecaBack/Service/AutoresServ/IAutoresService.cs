using BibliotecaBack.Models.Entities;

namespace BibliotecaBack.Service.AutoresServ
{
    public interface IAutoresService
    {
        void CrearAutorServ(Autor autor);
        Autor? TraerAutorServ(int id);
        IEnumerable<Autor> TraerAutoresServ();
        void ActualizarAutorServ(Autor autor);
    }
}
