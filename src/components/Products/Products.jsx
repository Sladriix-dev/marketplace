import { Link } from "react-router-dom";
import { getProducts } from "../data";

export default function Products() {
  let products = getProducts();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {products.map((product) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/products/${product.number}`}
            key={product.number}
          >
            {product.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}