namespace BibliotecaBack.Models.Entities
{
    public class Autor
    {
        public int Id { get; set; }
        public string NombreCompleto { get; set; } = string.Empty;
        public DateOnly FechaNacimiento { get; set; }
        public string CiudadProcedencia { get; set; } = string.Empty;
        public string CorreoElectronico { get; set; } = string.Empty;
    }
}
