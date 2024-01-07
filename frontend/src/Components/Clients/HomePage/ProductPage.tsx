import React, { useEffect, useState, useRef, ChangeEvent, FormEvent } from "react";
import { useParams } from "react-router-dom";
import Data, { Product } from "./Data";
import NavBar from "./NavBar";
import "../../Clients/styles/Components/NavBar/DetailsProduct/style.css";
import { BsBasket } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {addItem} from '../../Clients/redux/slice/cartSlice'


const ProductPage: React.FC = () => {
  const { id } = useParams<{id:string}>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [nbProduct, setNbProduct] = useState<number>(1);

  useEffect(() => {
    const trueProduct = Data.find((p) => p.id === parseInt(id || "", 10));
    setProduct(trueProduct);

    return () => {
      clearTimeout(timerInfo);
    };
  }, [id]);

  const updateNbProduct = (event: ChangeEvent<HTMLInputElement>) => {
    setNbProduct(Number(event.target.value));
  };

  const addingInfo = useRef<HTMLSpanElement>(null);
  let timerInfo:number;
  let display = true;

  const dispatch = useDispatch();

  const addToCard = (event: FormEvent) => {
    event.preventDefault();

    if (product) {
    const itemAdd = {
    id : product.id ,
    image : product.image,
    titre : product.titre,
    price : product.price,
    quantity: nbProduct,
  };

  dispatch(addItem(itemAdd));

      if (addingInfo.current) {
        addingInfo.current.innerText = "Ajouté au panier";

        if (display) {
          display = false;
          timerInfo = setTimeout(() => {
            if (addingInfo.current) {
              addingInfo.current.innerText = "";
              display = true;
            }
          }, 500);
        }
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className="alone__product">
        <div className="box__img">
          <img src={product?.image} alt={product?.titre} className="product__img" />
        </div>
        <div className="right__product__part">
          {product ? (
            <div className="details">
              <h2>{product.titre}</h2>
              <p> {product.description} </p>
              <span>Prix : {product.price}(kg) F CFA</span>
              <form onSubmit={addToCard} className="quantity_form">
                <label htmlFor="quantity">Quantité</label>
                <input
                  type="number"
                  id="quantity"
                  value={nbProduct}
                  onChange={updateNbProduct}
                />
                <button type="submit" className="btn_card">
                  <BsBasket /> Ajouter au panier
                </button>
              </form>
              <span ref={addingInfo} className="notif"></span>
            </div>
          ) : (
            <p>Produit introuvable</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
