using BackendTarjetaCredito.DI;

var builder = WebApplication.CreateBuilder(args);

// Agregar dependencias y otros servicios
var configuracion = builder.Configuration;
builder.Services.AgregarDependencias(configuracion);

// Configurar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Cambia esto si tu frontend est� en otro dominio
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials(); // Agregar esto si necesitas autenticaci�n basada en cookies
    });
});


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAngularApp");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
