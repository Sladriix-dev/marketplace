import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Product from './components/Products/Product/Product';
import Products from "./components/Products/Products";

import AddProducts from "./components/addProducts/addProducts";

import BestProducts from "./components/bestProducts/BestProducts";


function App () {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<BestProducts />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/addProducts" element={<AddProducts />} />
            </Routes>

            

            <Footer />
        </div>
    );
}

export default App;