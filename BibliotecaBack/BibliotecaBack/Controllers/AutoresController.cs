using BibliotecaBack.Models.Entities;
using BibliotecaBack.Service.AutoresServ;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BibliotecaBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutoresController(IAutoresService autoresService) : ControllerBase
    {
        private readonly IAutoresService _autoresService = autoresService;

        // GET: api/<AutoresController>
        [HttpGet("TraerAutores")]
        public IEnumerable<Autor> GetAutorres()
        {
            return _autoresService.TraerAutoresServ();
        }

        // GET api/<AutoresController>/5
        [HttpGet("TraerAutor/{id}")]
        public Autor? GetAutor(int id)
        {
            return _autoresService.TraerAutorServ(id);
        }

        // POST api/<AutoresController>
        [HttpPost("CrearAutor")]
        public void PostAutor([FromBody] Autor autor)
        {
            _autoresService.CrearAutorServ(autor);
        }

        // PUT api/<AutoresController>/5
        [HttpPut("ActualizarAutor")]
        public void PutAutor([FromBody] Autor autor)
        {
            _autoresService.ActualizarAutorServ(autor);
        }
    }
}
