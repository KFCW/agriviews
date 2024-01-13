import React, { ChangeEvent, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from "../redux/slice/cartSlice";
import "../styles/Components/NavBar/ProductPage/style.css";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  image: string;
  titre: string;
  price: number;
  quantity: number;
}

interface RootState {
  cart: {
    items: CartItem[];
  }
}
const numeroTelephoneIvoirienRegex = /^(01|03|05)[0-9]{8}$/;

function estNumeroTelephoneValide(numero) {
  return numeroTelephoneIvoirienRegex.test(numero);
}


const ShoppingBox: React.FC = () => {
  const Cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
  const [customInputValue, setCustomInputValue] = useState('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [paymentStatus, setPaymentStatus] = useState<'processing' | 'success' | 'failure' | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    dispatch(updateItem({ id, quantity: Number(event.target.value) }));
  };

  const handleOperatorClick = (operator: string) => {

    if(selectedOperator === operator){
      setSelectedOperator(null); 
    }else {
        setSelectedOperator(operator);
        setCustomInputValue(''); 
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> ) =>{
    const numericValue = e.target.value.replace(/[^0-9]/g, ' ')
    setCustomInputValue(numericValue); 
    setInputError(!estNumeroTelephoneValide(numericValue));
  }

  const handleValidation = () => {
    if (estNumeroTelephoneValide(customInputValue)) {
      // Numéro de téléphone valide, procédez au paiement
      setPaymentStatus('processing');

      setTimeout(() => {
        setPaymentStatus('success');

        setTimeout(() => {
          navigate('/user/products');
        }, 1000);
      }, 1000);
    } else {
      // Affichez une erreur si le numéro de téléphone n'est pas valide
      setInputError(true);
    }
  };

  return (
    <div className="container__cash">
      <div className="header__box">
        <h2>Pour effectuer le paiement des différents articles, il est nécessaire de suivre les différentes étapes.</h2>
      </div>
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
        <p className="total-price">Total : {(Cart.items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)).toFixed(2)} F CFA</p>
        <div className="operator">
          <div className={`moov ${selectedOperator === 'moov' && 'selected'}`} onClick={() => handleOperatorClick('moov')}>
            
          </div>
          <div className={`moov Orange ${selectedOperator === 'orange' && 'selected'}`} onClick={() => handleOperatorClick('orange')}>
           
          </div>
          <div className={`moov mtn ${selectedOperator === 'mtn' && 'selected'}`} onClick={() => handleOperatorClick('mtn')}>
            
          </div>
          <div className={`moov wave ${selectedOperator === 'wave' && 'selected'}`} onClick={() => handleOperatorClick('wave')}>
            
          </div>
        </div>
        {paymentStatus === 'processing' && (
          <div>
            <p>Veuillez patienter, le paiement est en cours de traitement...</p>
          </div>
        )}

        {paymentStatus === 'success' && (
          <div>
            <p>Le paiement a été effectué avec succès!</p>
          </div>
        )}
        {selectedOperator && (
          <div>
            <input
              type="text"
              value={customInputValue}
              onChange={handleInputChange}
              placeholder="Entrez une valeur personnalisée"
              pattern="\d"
            />
           {inputError && <p style={{ color: 'red' }}>Veuillez entrer un nombre valide.</p>}
          <button onClick={handleValidation} className="btn mt-2 mb-3">Procéder au paiement</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingBox;
