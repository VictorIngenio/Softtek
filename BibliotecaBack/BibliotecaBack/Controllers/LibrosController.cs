using BibliotecaBack.Models.Dto;
using BibliotecaBack.Models.Entities;
using BibliotecaBack.Service.LibrosServ;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BibliotecaBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibrosController(ILibrosService librosService) : ControllerBase
    {
        private readonly ILibrosService _librosService = librosService;

        // GET: api/<LibrosController>
        [HttpGet("TraerLibros")]
        public IEnumerable<LibrosLista> GetLibros()
        {
            return _librosService.TraerLibrosServ();
        }

        // GET api/<LibrosController>/5
        [HttpGet("TraerLibro/{id}")]
        public Libro? GetLibro(int id)
        {
            return _librosService.TraerLibroServ(id);
        }

        // POST api/<LibrosController>
        [HttpPost("CrearLibro")]
        public void PostLibro([FromBody] Libro libro)
        {
            _librosService.CrearLibroServ(libro);
        }

        // PUT api/<LibrosController>/5
        [HttpPut("ActualizarLibro")]
        public void PutLibro([FromBody] Libro libro)
        {
            _librosService.ActualizarLibroServ(libro);
        }
    }
}
