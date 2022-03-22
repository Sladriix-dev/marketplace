import { getProducts } from "../data";

export default function Products() {
  let products = getProducts();
  return (
    <section>
      <div class="xxx">
        <h1>Bienvenue</h1>
      </div>
    </section>    
  );
}