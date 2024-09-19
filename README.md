#  E-commerce "KIVARA - Tienda de celulares"

![Porada Kivara](public/presentacion/portada.jpg "Portada de Kivara")

## Deploy
https://talent-place.netlify.app/

[Video promocional](https://drive.google.com/file/d/1RYCESQGbj5mV8PiAQ7k0oZED8lndIv_S/view?usp=sharing).

## Descripción
Este proyecto es una plataforma de comercio electrónico construida con Next.js y Firebase. Permite a los usuarios navegar y agregar productos a un carrito de compras, gestionar el inventario de productos desde una interfaz de administrador, y completar el proceso de compra con el registro de comprobantes en una base de datos en la nube.

## Características
* Navegación de productos con filtros.
* Gestión del carrito de compras.
* Actualización de inventario en Firebase.
* Registro de comprobantes de compra en Firebase.
* Redirección a una página de órdenes después de la confirmación de compra.
* Funcionalidad de administración de productos (agregar, editar, eliminar).

## Tecnologías Utilizadas
* Next.js: Framework para React que permite generar páginas de manera estática y dinámica.
* Firebase Firestore: Base de datos en tiempo real utilizada para almacenar productos, gestionar inventarios y guardar comprobantes.
* Firebase Authentication: Para gestionar usuarios y sesiones (si aplica).
* SweetAlert2: Biblioteca para mostrar notificaciones visuales y alertas.
* Tailwind CSS: Framework CSS para diseñar interfaces de usuario responsivas.
* Vercel: Host para el deploy.

## Estructura del Proyecto
* components/: Contiene los componentes reutilizables, como el header, carrito, y formularios.
* context/: Contiene el CartContext, que maneja el estado global del carrito de compras.
* firebase/: Configuración y servicios de Firebase.
* pages/: Páginas principales del proyecto, como la de productos, carrito y órdenes.
* styles/: Archivos de estilos (principalmente para personalizar Tailwind CSS).

## Requisitos
* Node.js (v18 o superior)
* Firebase account con Firestore habilitado

## Instalación y Configuración

1. Clona el repositorio:

```
git clone https://github.com/kjnoviello/Kivara
```

2. Instala las dependencias:

```
npm install
```

3. Inicia el servidor de desarrollo:

```
npm run dev
```

4. Abre tu navegador en http://localhost:3000.

## Scripts Disponibles

* npm run dev: Inicia el servidor en modo desarrollo.
* npm run build: Construye la aplicación para producción.
* npm start: Inicia el servidor en modo producción después de la compilación.

## Más imagenes

![Porada Kivara](/public/presentacion/show01.jpg "Panel de control")
![Porada Kivara](/public/presentacion/show02.jpg "Catalogo")
![Porada Kivara](/public/presentacion/show03.jpg "Contacto")
![Porada Kivara](/public/presentacion/show04.jpg "Carrito")

## Video promocional
https://drive.google.com/file/d/1RYCESQGbj5mV8PiAQ7k0oZED8lndIv_S/view?usp=sharing

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

