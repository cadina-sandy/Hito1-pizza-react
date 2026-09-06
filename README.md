# 🍕 Pizzeria Mamma Mia

Proyecto realizado para el desafio **Hito 1 - Pizzeria Mamma Mia**, donde se implementa una pagina web basica usando React, Vite y Bootstrap.

## 🚀 Deploy

Puedes ver el proyecto publicado en Vercel aqui:

[Ver sitio web](https://hito1-pizza-react.vercel.app/)

## 📝 Descripcion

La aplicacion muestra la pagina de una pizzeria. Incluye una barra de navegacion, un encabezado con una imagen de fondo, tres tarjetas con informacion de pizzas y un pie de pagina.

Cada tarjeta recibe mediante props el nombre, precio, ingredientes e imagen de una pizza.

## ✨ Funcionalidades

- Mostrar los botones Home y Total en el Navbar.
- Mostrar Login y Register cuando el token es falso.
- Mostrar Profile y Logout cuando el token es verdadero.
- Mostrar el total de la compra con separador de miles.
- Mostrar tres pizzas con su imagen, ingredientes y precio.
- Usar props para enviar la informacion a las tarjetas.
- Mostrar botones de Ver Mas y Añadir sin funcionalidad.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- React
- Vite


## 📁 Estructura del proyecto

```text
Hito1-pizza-react/
├── src/
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## ⚙️ Como funciona

En `App.jsx` se muestran los componentes `Navbar`, `Home` y `Footer`.

Dentro de `Home.jsx` se llama al componente `Header` y se crean tres componentes `CardPizza`. La informacion de cada pizza se envia utilizando props.

En el Navbar se utiliza la variable `token` para decidir que botones mostrar. Tambien se utiliza `toLocaleString()` para mostrar el total con separador de miles.

## ⬆️ Subida del proyecto

El codigo fue guardado y subido a GitHub. Luego se conecto el repositorio con Vercel para crear el despliegue de la pagina.

Cada vez que se suben cambios a la rama `main`, Vercel actualiza automaticamente el sitio publicado.

## 🔗 Repositorio

[Ver repositorio en GitHub] https://github.com/cadina-sandy/Hito1-pizza-react
[Ver repositorio en Vercel] https://hito1-pizza-react.vercel.app/

