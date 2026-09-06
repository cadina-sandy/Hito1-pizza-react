// El componente recibe por props la información de cada pizza.
const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <article className="card h-100">
      <img src={img} className="card-img-top pizza-image" alt={`Pizza ${name}`} />
      <div className="card-body p-0 d-flex flex-column">
        <h2 className="fs-5 p-3 mb-0">Pizza {name}</h2>
        <div className="border-top border-bottom text-center p-3">
          <p className="text-secondary mb-2">Ingredientes:</p>
          {/* join convierte el arreglo de ingredientes en un texto */}
          <p className="mb-0">🍕 {ingredients.join(", ")}</p>
        </div>
        <p className="fs-4 fw-bold text-center my-3">
          Precio: ${price.toLocaleString("es-CL")}
        </p>
        <div className="d-flex justify-content-around mt-auto pb-3">
          <button className="btn btn-outline-dark">Ver Más 👀</button>
          <button className="btn btn-dark">Añadir 🛒</button>
        </div>
      </div>
    </article>
  );
};

export default CardPizza;
