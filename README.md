# Práctica 1 PW2

Frontend completo en Svelte 5 para la práctica 1, consumiendo el backend de productos, autenticación, carrito y administración de usuarios.

Repositorio público:

- [ikercelaya/Practica1PWII](https://github.com/ikercelaya/Practica1PWII)

Este repositorio contiene:

- Backend base en [`backend/`](backend/)
- Frontend SPA en Svelte 5 en [`frontend/`](frontend/)
- Memoria corta en [`MEMORIA_CORTA.md`](MEMORIA_CORTA.md)

## 1. Objetivo de la práctica

Construir una aplicación frontend en Svelte 5 que consuma una API existente y resuelva:

- autenticación con JWT
- navegación SPA
- estado global de la aplicación
- listado y gestión de productos
- control de acceso por rol
- experiencia de usuario cuidada y responsive

## 2. Tecnologías usadas

- Svelte 5
- Vite
- JavaScript
- Fetch API
- Stores de Svelte
- Backend Express + MongoDB + Redis

## 3. Estructura del proyecto

### Backend

- [`backend/server.js`](backend/server.js)
- [`backend/src/app.js`](backend/src/app.js)

### Frontend

- [`frontend/src/App.svelte`](frontend/src/App.svelte): composición principal de la SPA
- [`frontend/src/components/`](frontend/src/components/): componentes reutilizables
- [`frontend/src/pages/`](frontend/src/pages/): pantallas principales
- [`frontend/src/lib/`](frontend/src/lib/): router, utilidades y cliente base
- [`frontend/src/services/`](frontend/src/services/): acceso a servicios API
- [`frontend/src/stores/`](frontend/src/stores/): estado global

## 4. Funcionalidades implementadas

### Requisitos mínimos

- Login con usuario y contraseña
- Gestión de errores de autenticación
- Protección de rutas privadas
- Listado de productos
- Detalle de producto en modal
- Creación de productos
- Edición y borrado de productos para admin
- Navegación SPA con varias pantallas
- Pantalla actual resaltada en navegación
- Diseño responsive
- Layout visual trabajado

### Funcionalidades avanzadas

- Persistencia de sesión con `localStorage`
- Gestión de usuarios y roles desde panel admin
- Búsqueda por nombre
- Filtro por estado
- Filtro por precio máximo
- Feedback de carga
- Toasts globales de éxito y error
- Confirmación de acciones destructivas
- Perfil de usuario
- Carrito conectado a backend

## 5. Pantallas de la aplicación

- `/login`: inicio de sesión
- `/register`: registro de usuario
- `/`: página de inicio
- `/catalogo`: listado, filtros y detalle de productos
- `/perfil`: perfil del usuario autenticado
- `/carrito`: carrito del usuario autenticado
- `/admin`: panel de administración para rol `admin`

## 6. Runes de Svelte 5 utilizadas

### `$state()`

Se usa para estado local de componentes y pantallas.

Ejemplos:

- [`frontend/src/pages/LoginPage.svelte`](frontend/src/pages/LoginPage.svelte): estado de envío del formulario
- [`frontend/src/pages/RegisterPage.svelte`](frontend/src/pages/RegisterPage.svelte): estado de envío del formulario
- [`frontend/src/pages/CatalogPage.svelte`](frontend/src/pages/CatalogPage.svelte): búsqueda, filtros y producto seleccionado
- [`frontend/src/pages/AdminPage.svelte`](frontend/src/pages/AdminPage.svelte): usuario y producto seleccionados, estados de guardado
- [`frontend/src/components/UserForm.svelte`](frontend/src/components/UserForm.svelte): selección de rol

### `$derived()`

Se usa para valores derivados sin recalcular manualmente.

Ejemplos:

- [`frontend/src/App.svelte`](frontend/src/App.svelte): componente de página actual según la ruta
- [`frontend/src/pages/CatalogPage.svelte`](frontend/src/pages/CatalogPage.svelte): productos filtrados y contador visible
- [`frontend/src/pages/ProfilePage.svelte`](frontend/src/pages/ProfilePage.svelte): etiqueta de rol
- [`frontend/src/components/ProductCard.svelte`](frontend/src/components/ProductCard.svelte): estado visual del producto e imagen
- [`frontend/src/components/ProductDetailModal.svelte`](frontend/src/components/ProductDetailModal.svelte): estado e imagen del detalle

### `$effect()`

Se usa para side effects y sincronización.

Ejemplos:

- [`frontend/src/App.svelte`](frontend/src/App.svelte): redirección al login si el usuario no está autenticado y protección de rutas admin
- [`frontend/src/pages/CatalogPage.svelte`](frontend/src/pages/CatalogPage.svelte): recarga reactiva de productos cuando cambia la búsqueda
- [`frontend/src/components/UserForm.svelte`](frontend/src/components/UserForm.svelte): sincronización del rol al editar usuarios

### `$props()`

Se usa para definir props en componentes reutilizables.

Ejemplos:

- [`frontend/src/components/Layout.svelte`](frontend/src/components/Layout.svelte)
- [`frontend/src/components/Link.svelte`](frontend/src/components/Link.svelte)
- [`frontend/src/components/ProductCard.svelte`](frontend/src/components/ProductCard.svelte)
- [`frontend/src/components/ProductForm.svelte`](frontend/src/components/ProductForm.svelte)
- [`frontend/src/components/UserForm.svelte`](frontend/src/components/UserForm.svelte)
- [`frontend/src/components/ProductDetailModal.svelte`](frontend/src/components/ProductDetailModal.svelte)

### Callbacks entre componentes

Se usan callbacks en lugar de eventos clásicos para comunicar acciones del hijo al padre.

Ejemplos:

- `onAdd`, `onEdit`, `onDelete`, `onView` en [`frontend/src/components/ProductCard.svelte`](frontend/src/components/ProductCard.svelte)
- `onSubmit` en [`frontend/src/components/ProductForm.svelte`](frontend/src/components/ProductForm.svelte)
- `onSubmit` en [`frontend/src/components/UserForm.svelte`](frontend/src/components/UserForm.svelte)
- `onClose` y `onAdd` en [`frontend/src/components/ProductDetailModal.svelte`](frontend/src/components/ProductDetailModal.svelte)

## 7. Estado global de la aplicación

Se ha organizado en stores:

- [`frontend/src/stores/auth.js`](frontend/src/stores/auth.js): autenticación, token y usuario
- [`frontend/src/stores/products.js`](frontend/src/stores/products.js): productos cargados
- [`frontend/src/stores/cart.js`](frontend/src/stores/cart.js): carrito y derivados de cantidad y total
- [`frontend/src/stores/users.js`](frontend/src/stores/users.js): usuarios para administración

## 8. Backend utilizado

### Endpoints principales consumidos

Autenticación:

- `POST /api/login`
- `POST /api/register`

Productos:

- `GET /api/productos`
- `POST /api/productos`
- `PUT /api/productos/:id`
- `DELETE /api/productos/:id`

Carrito:

- `GET /api/cart`
- `POST /api/cart/add`
- `DELETE /api/cart/:productId`

Usuarios:

- `GET /api/users`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

### Roles necesarios

- `user`: puede iniciar sesión, ver productos y gestionar su carrito
- `admin`: además puede crear, editar y borrar productos, así como gestionar usuarios

### Observación importante sobre el backend

El backend real proporciona `nombre`, `precio` e `imagen` en productos. No expone de forma nativa un campo `activo`, por lo que en el frontend el estado se representa visualmente como activo por defecto si ese campo no llega en la respuesta. Esto se ha hecho para ajustarse a la rúbrica sin inventar persistencia adicional en la API.

## 9. Instalación

### Requisitos previos

Necesitas tener instalado:

- Node.js
- MongoDB
- Redis

El backend espera por defecto:

- MongoDB en `mongodb://localhost:27017/productos`
- Backend en puerto `3000`
- Frontend en puerto `5173`

## 10. Cómo ejecutar el proyecto

### 1. Clonar y abrir el repositorio

```bash
git clone https://github.com/ikercelaya/Practica1PWII.git
cd Practica1PWII
```

Después, abre esa carpeta en Visual Studio Code.

### 2. Configurar el backend

Abre una terminal en VS Code y ejecuta:

```powershell
cd backend
Copy-Item .env.example .env
cmd /c npm.cmd install
cmd /c npm.cmd run seed
cmd /c npm.cmd run dev
```

Esto:

- crea el archivo `.env`
- instala dependencias
- inserta usuarios de prueba
- arranca el backend en `http://localhost:3000`

### 3. Configurar el frontend

Abre otra terminal y ejecuta:

```powershell
cd frontend
Copy-Item .env.example .env
cmd /c npm.cmd install
cmd /c npm.cmd run dev
```

Esto arranca Vite en:

- `http://localhost:5173`

### 4. Abrir la aplicación

URLs principales:

- Frontend: `http://localhost:5173`
- API backend: `http://localhost:3000/api`
- Swagger del backend: `http://localhost:3000/api-docs`

## 11. Usuarios de prueba

Si ejecutas el seed del backend:

- `admin` / `admin123`
- `user` / `user123`

## 12. Scripts útiles

### Frontend

```powershell
cd frontend
cmd /c npm.cmd run dev
cmd /c npm.cmd run build
```

### Backend

```powershell
cd backend
cmd /c npm.cmd run dev
cmd /c npm.cmd run seed
```

## 13. Verificación realizada

Se ha verificado correctamente la compilación del frontend con:

```powershell
cd frontend
cmd /c npm.cmd run build
```

## 14. Correspondencia con los criterios de evaluación

### Requisitos mínimos backend/frontend

- Login implementado
- Consumo de API de productos implementado
- Navegación básica SPA implementada
- Estilos mínimos y responsive implementados

### Runes Svelte 5: estado y derivados

- Uso de `$state()` y `$derived()` en pantallas y componentes principales

### Runes Svelte 5: efectos

- Uso de `$effect()` para redirecciones, sincronización y recarga de datos

### Comunicación con `$props()` y callbacks

- Componentes desacoplados y reutilizables con callbacks hacia el padre

### Funcionalidades avanzadas

- Gestión de usuarios y roles
- Persistencia de sesión
- Filtros
- UX mejorada
- Formularios con validaciones básicas y feedback

## 15. Entrega

Este README documenta:

- cómo instalar y ejecutar el proyecto
- qué runes de Svelte 5 se han usado y en qué componentes
- qué endpoints del backend se consumen
- qué roles intervienen en la aplicación

Para la entrega en Campus se incluye además:

- este README
- la memoria corta en [`MEMORIA_CORTA.md`](MEMORIA_CORTA.md)
