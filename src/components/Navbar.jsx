const Navbar = () => {
  // Valores temporales para practicar el uso de variables en React.
  const total = 25000;
  const token = false;
  const nombrePizzeria = "Mamma Mia";

  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-2">
      <div className="d-flex align-items-center gap-2 flex-wrap">
        <span className="navbar-brand mb-0 fs-6">Pizzería Mamma Mia!</span>

        <button className="btn btn-outline-light btn-sm">🍕 Home</button>

        {/* Si token es true mostramos Profile y Logout */}
        {token ? (
          <>
            <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
          </>
        ) : (
          // Si token es false mostramos Login y Register.
          <>
            <button className="btn btn-outline-light btn-sm">🔐 Login</button>
              <button className="btn btn-outline-light btn-sm">🔐 Register</button>
          </>
        )}
      </div>

      <button className="btn btn-outline-info btn-sm">
        {/* toLocaleString agrega el separador de miles al total */}
        🛒 Total: ${total.toLocaleString("es-CL")}
      </button>
    </nav>
  );
};

export default Navbar;
