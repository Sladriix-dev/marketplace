import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/home">Homepage</Link>
        <Link to="/products">Produits</Link>
      </nav>
      <Outlet />
    </div>
  );
}