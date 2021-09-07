import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import {actRemoveProduct, actChangeMessage, actUpdateProduct} from './../actions/index';

class CartContainer extends Component {

showCartItem = (cart) => {
    let result =<tr><td> {Message.MSG_CART_EMPTY}</td></tr>;
    let {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
    if(cart.length > 0){
        result = cart.map((item, index) => {
            return (
                <CartItem key={item.product.id} item={item} index={index} onDeleteProductInCart={onDeleteProductInCart} onChangeMessage={onChangeMessage} onUpdateProductInCart={onUpdateProductInCart} ></CartItem>
            );
        })
    }
    return result;
}

showTotalAll = (cart) => {
    let result = null;
    if(cart.length > 0) {
        result = <CartResult cart={cart}></CartResult>
    }
    return result;
}

render() {
    let {cart} = this.props;
    return (
        <Cart>
            {this.showCartItem(cart)}
            {this.showTotalAll(cart)}
        </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart : PropTypes.arrayOf(PropTypes.shape({     
      products : PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }),
      quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = (state) =>{
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
      onDeleteProductInCart: (product) => {
        dispatch(actRemoveProduct(product, 1));
      },
      onChangeMessage: (message) => {
        dispatch(actChangeMessage(message));
      },
      onUpdateProductInCart: (product, quantity) => {
        dispatch(actUpdateProduct(product, quantity));
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
