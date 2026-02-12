using BibliotecaBack.Models.Context;
using BibliotecaBack.Models.Entities;

namespace BibliotecaBack.Repository.AutoresRep
{
    public class AutoresRepository(BibliotecaContext context) : IAutoresRepository
    {
        private readonly BibliotecaContext _context = context;

        public void ActualizarAutorRep(Autor autor)
        {
            try
            {
                _context.Update(autor);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine("ActualizarAutorRep: {mensaje}", e.Message);
            }
        }

        public void CrearAutorRep(Autor autor)
        {
            try
            {
                _context.Autors.Add(autor);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine("CrearAutorRep: {mensaje}", e.Message);
            }
        }

        public IEnumerable<Autor> TraerAutoresRep()
        {
            try
            {
                List<Autor> autors = _context.Autors.ToList();
                return autors;
            }
            catch (Exception e)
            {
                Console.WriteLine("CrearAutorRep: {mensaje}", e.Message);
                return [];
            }
        }

        public Autor? TraerAutorRep(int id)
        {
            try
            {
                Autor? autor = _context.Autors.Where(x => x.Id == id).FirstOrDefault();
                return autor;
            }
            catch (Exception e)
            {
                Console.WriteLine("CrearAutorRep: {mensaje}", e.Message);
                return null;
            }
        }
    }
}
