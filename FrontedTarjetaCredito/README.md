# Sistema de Gestión de Tarjetas de Crédito

Este proyecto es una aplicación web desarrollada en Angular que permite gestionar tarjetas de crédito de manera eficiente y segura.

## Características Principales

- ✨ Interfaz de usuario moderna y responsiva
- 🔄 Operaciones CRUD completas para tarjetas de crédito
- ✅ Validación de formularios en tiempo real
- 🔒 Validación de datos de tarjetas (número, fecha de expiración, CVV)
- 📱 Diseño adaptable a diferentes dispositivos

## Requisitos Previos

- Node.js (versión 14.x o superior)
- Angular CLI (versión 15.x o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:

```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Navega al directorio del proyecto:

```bash
cd FrontedTarjetaCredito
```

3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   └── tarjeta-credito/
│   │       ├── tarjeta-credito.ts
│   │       ├── tarjeta-credito.html
│   │       └── tarjeta-credito.css
│   └── services/
│       └── tarjeta/
│           └── tarjeta-service.ts
```

## Funcionalidades

- **Crear Tarjeta**: Agregar nuevas tarjetas de crédito con validación de datos
- **Leer Tarjetas**: Visualizar todas las tarjetas registradas
- **Actualizar Tarjeta**: Modificar información de tarjetas existentes
- **Eliminar Tarjeta**: Remover tarjetas del sistema

## Validaciones

El sistema incluye validaciones para:

- Número de tarjeta (16 dígitos)
- Fecha de expiración (formato MM/YY)
- CVV (3 dígitos)
- Nombre del titular (campo requerido)

## Tecnologías Utilizadas

- Angular
- TypeScript
- Reactive Forms
- ngx-toastr (para notificaciones)
- Angular Material (para componentes UI)

## Contribución

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Contacto

[Tu Nombre] - [Tu Email]

Link del Proyecto: [https://github.com/tu-usuario/FrontedTarjetaCredito](https://github.com/tu-usuario/FrontedTarjetaCredito)
