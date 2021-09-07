import { Component } from "react";
import * as Message from "./../constants/Message";

class CartItem extends Component {
  showTotal = (price, quantity) =>{
    return(price * quantity);
  }

  onRemove = (product) => {
    let {onDeleteProductInCart, onChangeMessage} = this.props;
    onDeleteProductInCart(product);
    onChangeMessage(Message.MSG_DELETE_CART_SUCCESS);
  }

  updateQuantity = (product, quantity) => {
    if(quantity > 0){
      this.props.onUpdateProductInCart(product, quantity);
      this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
  }


  render() {
    let {item} = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price} VND</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"  onClick={() => this.updateQuantity(item.product, item.quantity -1)}>
              —
            </label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => this.updateQuantity(item.product, item.quantity +1)} >
              +
            </label>
          </div>
        </td>
        <td>{this.showTotal(item.product.price, item.quantity)} VND</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onRemove(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
