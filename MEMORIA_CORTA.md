# Memoria corta - Práctica 1 PW2

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

## 3. Funcionalidades implementadas

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
- panel de administración de usuarios
- pantalla de perfil del usuario
- feedback visual de carga, errores y acciones completadas

## 4. Uso de Svelte 5

Se han utilizado las runes principales exigidas en la práctica:

- `$state()` para manejar estado local en formularios, filtros, selecciones y estados de carga
- `$derived()` para calcular valores derivados como la página actual, productos filtrados, etiquetas de rol, estado visual del producto o contadores
- `$effect()` para redirecciones, sincronización de formularios y recarga reactiva de datos
- `$props()` para definir componentes reutilizables

Además, la comunicación entre componentes se ha realizado mediante callbacks en lugar de eventos personalizados clásicos, por ejemplo en las acciones de crear, editar, borrar, ver detalle o añadir productos al carrito.

## 5. Estructura del proyecto

El proyecto se organiza en dos bloques principales:

- `backend/`: API proporcionada
- `frontend/`: SPA desarrollada en Svelte 5

Dentro del frontend se han separado:

- `components/`: componentes reutilizables
- `pages/`: pantallas principales
- `stores/`: estado global
- `lib/` y `services/`: utilidades, router y acceso a API

## 6. Endpoints y roles utilizados

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

## 7. Experiencia de usuario

Se ha trabajado un diseño responsive para escritorio y móvil, evitando una interfaz básica sin estilo. También se han añadido mensajes de error y éxito, botones deshabilitados durante operaciones asíncronas, confirmación de borrados y control de acceso visual según el rol del usuario.

## 8. Conclusión

La práctica cumple los requisitos mínimos solicitados y añade varias funcionalidades avanzadas, especialmente en persistencia de sesión, filtros, gestión de usuarios y mejora de experiencia de usuario. También se ha aplicado de forma explícita la filosofía de Svelte 5 mediante runes y componentes reutilizables, alineando la implementación con los criterios de evaluación de la práctica.
