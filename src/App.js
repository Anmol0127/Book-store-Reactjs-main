import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import ProductView from "./components/ProductView/ProductView";
import Manga from "./components/Manga/Manga";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import loadingImg from "./assets/loader.gif";
import "./style.css";
import Fiction from "./components/Fiction/Fiction";
import Biography from "./components/Bio/Biography";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [mangaProducts, setMangaProducts] = useState([]);
  const [fictionProducts, setFictionProducts] = useState([]);
  const [bioProducts, setBioProducts] = useState([]);
  const [featureProducts, setFeatureProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchMangaProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["manga"],
    });
    setMangaProducts(data);
  };

  const fetchFeatureProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["featured"],
    });
    setFeatureProducts(data);
  };

  const fetchFictionProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["fiction"],
    });
    setFictionProducts(data);
  };

  const fetchBioProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["biography"],
    });
    setBioProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchFeatureProducts();
    fetchMangaProducts();
    fetchFictionProducts();
    fetchBioProducts();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div>
      <>
        <Router>
          <div style={{ display: "flex" }}>
            <CssBaseline />
            <Navbar
              totalItems={0} // Assuming no cart functionality, so total items is 0
              handleDrawerToggle={handleDrawerToggle}
            />
            <Switch>
              <Route exact path="/">
                <Products
                  products={products}
                  featureProducts={featureProducts}
                />
              </Route>
              <Route path="/product-view/:id" exact>
                <ProductView />
              </Route>
              <Route path="/manga" exact>
                <Manga mangaProducts={mangaProducts} />
              </Route>
              <Route path="/fiction" exact>
                <Fiction fictionProducts={fictionProducts} />
              </Route>
              <Route path="/biography" exact>
                <Biography bioProducts={bioProducts} />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </>
    </div>
  );
};

export default App;
