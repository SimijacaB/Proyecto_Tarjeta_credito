using Microsoft.EntityFrameworkCore;

namespace BackendTarjetaCredito.DI
{
    public static class InyeccionDependencias
    {
        public static IServiceCollection AgregarDependencias(this IServiceCollection servicios,
                                                           IConfiguration configuracion)
        {
            servicios.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(configuracion.GetConnectionString("DevConnection")));

            return servicios;
        }
    }
}