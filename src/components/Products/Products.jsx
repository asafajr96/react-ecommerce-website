import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id:1, name: 'Shoes', description: "Running shoes.", 
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', price:"$90"},
    {id:2, name: 'Macbook', description: "Apple Macbook.", image: 'https://images.unsplash.com/photo-1606248897020-696650b29ee1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80', price:"$1900"},
];



const Products = () => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
         <Grid container justify="center" spacing={4}>
             {products.map((product) => (
                <Grid item key ={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
             ))}
         </Grid>
     </main>
    );  
}

export default Products;
