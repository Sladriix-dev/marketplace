import { Link } from "react-router-dom";
import { getProducts } from "../data";

export default function Products() {
  let products = getProducts();
  return (
    <div>
      <nav>
        {products.map((product) => (
          <Link
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