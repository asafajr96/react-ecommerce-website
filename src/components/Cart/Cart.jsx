import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart. <Link to="/" className={classes.link}>start adding some!</Link></Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                <Grid item xs={12} sm={4} key={lineItem.id}>
                    <CartItem lineItem={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                </Grid>
                ))}
            </Grid>

            <div className={classes.cardDetails}>
                <Typography variant ="h4">
                    Sub-Total:{cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} onClick={onEmptyCart} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )
    
    if(!cart.line_items) return 'Loading...';

    return (
        <Container >
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
            <div className={classes.toolbar}/>
            { !cart.line_items.length ? <EmptyCart/> : <FilledCart/> }
        </Container>
    )
}

export default Cart;
