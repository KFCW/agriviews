import React, { ChangeEvent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {updateItem} from "../redux/slice/cartSlice"
import "../styles/Components/NavBar/ProductPage/style.css";

interface CartItem {
  id: number;
  image: string;
  titre: string;
  price: number;
  quantity: number;
}

interface RootState {
  cart: {
    items : CartItem[];
  }
}

const ShoppingBox: React.FC = () => {
  const Cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {

    dispatch(updateItem({id ,quantity : Number(event.target.value)}))
  };

  return (
    <div className="global-container">
      <p className="heading-cart">Votre panier : </p>
      <ul className="cart-list">
        {Cart.items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="image du produit" />
            <div className="bloc-cart-infos">
              <h4>{item.titre}</h4>
              <p>Prix: {item.price * item.quantity}F CFA</p>
            </div>
            <div className="bloc-input">
              <label htmlFor="quantityInput">quantité</label>
              <input
                type="number"
                id="quantityInput"
                value={item.quantity}
                onChange={(e) => handleChange(e, item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="total-price">Total : {(Cart.items.reduce((prev,curr)=> prev + curr.price*curr.quantity  ,0)).toFixed(2) } F CFA</p>
      <button type="button" className="btn-cart">
        Procéder au paiement
      </button>
    </div>
  );
};

export default ShoppingBox;