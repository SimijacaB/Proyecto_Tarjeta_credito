using BackendTarjetaCredito.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendTarjetaCredito
{
    public class ApplicationDbContext : DbContext
    {
        DbSet<TarjetaCredito> TarjetaCredito { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options ) : base(options)
        {
            
        }
    }
}
