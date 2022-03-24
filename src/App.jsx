import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Product from './components/Products/Product/Product';
import Products from "./components/Products/Products";

<<<<<<< HEAD
import AddProducts from "./components/addProducts/addProducts";

import BestProducts from "./components/bestProducts/BestProducts";
=======
import io from "socket.io-client";
import { addResponseMessage, Widget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
>>>>>>> e407f67a5560e2958071782860429122710eedae

import BestProducts from "./components/bestProducts/BestProducts";
import { useEffect } from "react";

let sessionId = null;
function App () {
    useEffect(() => {
        const socket = io("http://127.0.0.1:3000")
        socket.on('connect', () => {
            sessionId = socket.id;
        })
        socket.on("chat message", data => {
            if (data.sessionId == sessionId) return
            addResponseMessage(data.msg)
          });
    }, [])

    const sendNewMessage = (newMessage) => {
        const socket = io("http://127.0.0.1:3000")
        socket.emit("chat message", {msg: newMessage, sessionId})
    }

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<BestProducts />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/addProducts" element={<AddProducts />} />
            </Routes>
            <Widget 
            handleNewUserMessage={sendNewMessage}
            title="Bienvenue"
            subtitle='Quel est votre problème?' />
            <Footer />
        </div>
    );
}

export default App;