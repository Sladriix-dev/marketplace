import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./components/home/Home";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route
                index
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>Select a product</p>
                    </main>
                }
            />
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
  </BrowserRouter>,
  rootElement
);