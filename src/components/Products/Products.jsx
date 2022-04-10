import React from "react";
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id:1, name: "Product 1", price: "10.00", description: "This is product 1", image: "https://via.placeholder.com/150" },
    { id:2, name: "Product 2", price: "20.00", description: "This is product 2", image: "https://via.placeholder.com/150" },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;