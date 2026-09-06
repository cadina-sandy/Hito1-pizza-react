# Pizzería Mamma Mia

Proyecto realizado para el Hito 1 del módulo de React. En este trabajo se creó una página básica para una pizzería utilizando React, Vite y Bootstrap.

## Descripción

La página muestra un menú de navegación, un encabezado, tres tarjetas con información de pizzas y un pie de página.

El proyecto fue realizado siguiendo la pauta entregada y utilizando componentes de React.

## Componentes creados

- `Navbar.jsx`: contiene el menú de navegación y el total de la compra.
- `Header.jsx`: contiene el título, la descripción y la imagen de fondo.
- `Home.jsx`: reúne el encabezado y las tarjetas de las pizzas.
- `CardPizza.jsx`: muestra el nombre, imagen, ingredientes y precio de cada pizza.
- `Footer.jsx`: contiene el texto de derechos reservados.
- `App.jsx`: muestra los componentes principales de la página.

## Funcionalidades

- Uso de componentes de React.
- Envío de información mediante props.
- Uso de una condición para mostrar los botones según el valor de `token`.
- Formato de precios con separador de miles.
- Diseño adaptable utilizando Bootstrap.
- Imágenes obtenidas desde internet.

Los botones solamente son visuales y todavía no tienen funcionalidad, tal como indica la pauta.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- React
- Vite
- Bootstrap

## Instalación del proyecto

Para descargar y ejecutar el proyecto se deben utilizar los siguientes comandos:

```bash
git clone https://github.com/cadina-sandy/Hito1-pizza-react.git
cd Hito1-pizza-react
npm install
npm run dev
```

Después se debe abrir en el navegador la dirección local que muestra Vite.

## Subida a GitHub

Para guardar y subir el proyecto se utilizaron los siguientes comandos:

```bash
git init
git add .
git commit -m "Entrega Hito 1 Pizzeria Mamma Mia"
git branch -M main
git remote add origin https://github.com/cadina-sandy/Hito1-pizza-react.git
git push -u origin main
```

Repositorio del proyecto:

[https://github.com/cadina-sandy/Hito1-pizza-react](https://github.com/cadina-sandy/Hito1-pizza-react)

## Despliegue en Vercel

Para publicar la página se conectó el repositorio de GitHub con Vercel. Vercel detectó el proyecto de Vite, realizó la construcción y creó el despliegue de producción.

Página publicada:

[https://hito1-pizza-react.vercel.app](https://hito1-pizza-react.vercel.app)

Cuando se suben nuevos cambios a la rama `main` de GitHub, Vercel actualiza automáticamente la página publicada.

## Autor

Sandy Cadina
