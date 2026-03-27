# Memoria corta - Práctica 1 PW2

## Acceso rápido

Repositorio público:

- [ikercelaya/Practica1PWII](https://github.com/ikercelaya/Practica1PWII)

## 1. Descripción general

En esta práctica se ha desarrollado un frontend completo en Svelte 5 para consumir una API REST ya proporcionada. La aplicación implementa autenticación con JWT, navegación SPA, gestión global del estado, catálogo de productos, carrito y una zona de administración con control de acceso por roles.

El objetivo principal ha sido construir una interfaz funcional y mantenible que se comunique correctamente con el backend, aplicando además las nuevas características de Svelte 5, especialmente el uso de runes.

## 2. Tecnologías utilizadas

- Svelte 5
- Vite
- JavaScript
- Fetch API
- Backend Express
- MongoDB
- Redis
- Git

## 3. Requisitos de ejecución

Para poner en marcha el proyecto desde cero es necesario disponer de:

- Node.js
- MongoDB
- Redis
- Git

El backend se conecta por defecto a:

- MongoDB en `mongodb://localhost:27017/productos`
- Redis en `redis://localhost:6379`

Tanto MongoDB como Redis pueden ejecutarse instalados localmente o mediante contenedores Docker.

## 4. Funcionalidades implementadas

La aplicación incluye las siguientes funcionalidades:

- inicio de sesión mediante usuario y contraseña
- registro de nuevos usuarios
- almacenamiento y restauración de sesión con JWT
- protección de rutas privadas
- listado de productos consumiendo la API
- búsqueda de productos por nombre
- filtros por estado y precio máximo
- detalle de producto en modal
- creación, edición y borrado de productos para administradores
- carrito de compra asociado al usuario autenticado
- simulación de finalización de compra
- historial de pedidos por usuario
- panel de administración de usuarios
- pantalla de perfil del usuario
- feedback visual de carga, errores y acciones completadas

## 5. Uso de Svelte 5

Se han utilizado las runes principales exigidas en la práctica:

- `$state()` para manejar estado local en formularios, filtros, selecciones y estados de carga
- `$derived()` para calcular valores derivados como la página actual, productos filtrados, etiquetas de rol, estado visual del producto o contadores
- `$effect()` para redirecciones, sincronización de formularios y recarga reactiva de datos
- `$props()` para definir componentes reutilizables

Además, la comunicación entre componentes se ha realizado mediante callbacks en lugar de eventos personalizados clásicos, por ejemplo en las acciones de crear, editar, borrar, ver detalle o añadir productos al carrito.

## 6. Estructura del proyecto

El proyecto se organiza en dos bloques principales:

- `backend/`: API proporcionada
- `frontend/`: SPA desarrollada en Svelte 5

Dentro del frontend se han separado:

- `components/`: componentes reutilizables
- `pages/`: pantallas principales
- `stores/`: estado global
- `lib/` y `services/`: utilidades, router y acceso a API

## 7. Endpoints y roles utilizados

Se consumen principalmente los siguientes endpoints del backend:

- `POST /api/login`
- `POST /api/register`
- `GET /api/productos`
- `POST /api/productos`
- `PUT /api/productos/:id`
- `DELETE /api/productos/:id`
- `GET /api/cart`
- `POST /api/cart/add`
- `DELETE /api/cart/:productId`
- `GET /api/users`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

La aplicación distingue dos roles:

- `user`: acceso a catálogo, perfil y carrito
- `admin`: acceso adicional a gestión de productos y usuarios

Como el backend no incluye endpoints específicos de pedidos, la funcionalidad de compra final se ha resuelto simulando el pedido en el frontend. El pedido se guarda en almacenamiento local asociado al usuario y el carrito real sí se vacía utilizando la API disponible.

## 8. Puesta en marcha

El orden correcto de ejecución es:

1. arrancar MongoDB
2. arrancar Redis
3. ejecutar el backend
4. ejecutar el frontend

Comandos principales:

```powershell
cd backend
Copy-Item .env.example .env
cmd /c npm.cmd install
cmd /c npm.cmd run seed
cmd /c npm.cmd run dev
```

```powershell
cd frontend
Copy-Item .env.example .env
cmd /c npm.cmd install
cmd /c npm.cmd run dev
```

URLs de acceso:

- frontend: `http://localhost:5173`
- backend: `http://localhost:3000/api`
- documentación Swagger: `http://localhost:3000/api-docs`

## 9. Experiencia de usuario

Se ha trabajado un diseño responsive para escritorio y móvil, evitando una interfaz básica sin estilo. También se han añadido mensajes de error y éxito, botones deshabilitados durante operaciones asíncronas, confirmación de borrados y control de acceso visual según el rol del usuario.

## 10. Conclusión

La práctica cumple los requisitos mínimos solicitados y añade varias funcionalidades avanzadas, especialmente en persistencia de sesión, filtros, gestión de usuarios y mejora de experiencia de usuario. También se ha aplicado de forma explícita la filosofía de Svelte 5 mediante runes y componentes reutilizables, alineando la implementación con los criterios de evaluación de la práctica.
