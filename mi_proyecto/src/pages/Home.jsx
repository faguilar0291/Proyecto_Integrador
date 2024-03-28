import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { pizzas } from "./data.js";
import "./home.scss";

import ProductCard from "../components/productCard/ProductCard";

const Home = () => {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        setProducts(pizzas);
    }, []);

    const IT_IS_OFF = 10;

    return (
        <Box className="home">
            <Box
                component="section"
                className="home__section">

                <Box
                    component="section"
                    className="home__section__search"
                >
                    <h3>Productos</h3>

                </Box>

                <Box
                    component="section"
                    className="home__section__cards">
                    {products.map( (product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            setProducts={setProducts}
                            itIsOff={IT_IS_OFF}
                        />

                    ))}
                </Box>

            </Box>
        </Box>
    );
};

export default Home;

//clase 49 25min