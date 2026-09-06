import Header from "./Header.jsx";
import CardPizza from "./CardPizza.jsx";

const Home = () => {
  return (
    <main>
      {/* El Header se muestra dentro de Home, como pide la pauta */}
      <Header />

      <section className="container py-5">
        <div className="row g-4">
          {/* Cada CardPizza recibe datos diferentes mediante props */}

          <div className="col-12 col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://images.unsplash.com/photo-1664309641932-0e03e0771b97?auto=format&fit=crop&w=900&q=80"
            />
          </div>


          <div className="col-12 col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://images.unsplash.com/photo-1682264788192-9abdec90c425?auto=format&fit=crop&w=900&q=80"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://images.unsplash.com/photo-1607929298871-fbdcf7e84852?auto=format&fit=crop&w=900&q=80"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
