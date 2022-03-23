import { Routes, Route } from "react-router-dom";
/*import Home from "./components/home/Home";*/
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Product from './components/Products/Product/Product';
import Products from "./components/Products/Products";

import BestProducts from "./components/bestProducts/BestProducts";


function App () {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<BestProducts />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
            </Routes>

            

            <Footer />
        </div>
    );
}

export default App;