import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Product from './components/Products/Product';
import Products from "./components/Products/Products";

export default function App () {
render(
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route
                index
                element={
                    <main>
                        <p>Select a product</p>
                    </main>
                }
            />

            <Route path="products" element={<Products />} />

            <Route path=":productId" element={<Product />} />
            <Route
                path="*"
                element={
                    <main>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)};