import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ lineItem, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();
    return (
        <Card>
            
            <CardMedia image={lineItem.media.source} alt={lineItem.name} className={classes.media} />
            <CardContent className={classes.CardContent}>
                <Typography variant='h4'>{lineItem.name}</Typography>
                <Typography variant='h5'>{lineItem.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" onClick={() => onUpdateCartQty(lineItem.id, lineItem.quantity -1)} size="small">-</Button>
                    <Typography color="textPrimary">{lineItem.quantity}</Typography>
                    <Button type="button" onClick={() => onUpdateCartQty(lineItem.id, lineItem.quantity +1)} size="small">+</Button>
                </div>
                <Button variant="contained" onClick={() => onRemoveFromCart(lineItem.id)} type="button" color="secondary">Remove</Button>
            </CardActions>
            
        </Card>
    )
}

export default CartItem;
