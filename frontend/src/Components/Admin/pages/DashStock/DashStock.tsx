import { FaBoxOpen } from "react-icons/fa";
import "./style.css"
import Data from "../../../Clients/HomePage/Data";

const DashStock = () => {
  return (
    <div className="container__vente ">
      <div className="icon__dash">
      <h3 className="stock__title">Nos Stocks</h3>
      <div className="box__stock">
        <FaBoxOpen  className="dash__icon"/>
        <span>20</span>
      </div>
      </div>
      <div className="category__0">
        <div className="category__title icon__dash">
          <h3 className="categ ">Céréales et grains</h3>
        </div>
          <div className="list__product">
          {
            Data.slice(0, 9).map(( item,index) => (
              <ul className="ul__container">
                <li key={index}>{item.titre}</li>
              </ul>
            ))
          }
          </div>
      </div>
      <div className="category__1">
        <div className="category__title icon__dash">
          <h3 className="categ ">Légumes</h3>
        </div>
          <div className="list__product">
          {
            Data.slice(10, 20).map(( item,index) => (
              <ul className="ul__container">
                <li key={index}>{item.titre}</li>
              </ul>
            ))
          }
          </div>
      </div>
      <div className="category__1">
        <div className="category__title icon__dash">
          <h3 className="categ ">Fruits</h3>
        </div>
          <div className="list__product">
          {
            Data.slice(11, 28).map(( item,index) => (
              <ul className="ul__container">
                <li key={index}>{item.titre}</li>
              </ul>
            ))
          }
          </div>
      </div>
      <div className="category__1">
        <div className="category__title icon__dash">
          <h3 className="categ ">Légumineuses</h3>
        </div>
          <div className="list__product">
          {
            Data.slice(29, 33).map(( item,index) => (
              <ul className="ul__container">
                <li key={index}>{item.titre}</li>
              </ul>
            ))
          }
          </div>
      </div>
      <div className="category__1">
        <div className="category__title icon__dash">
          <h3 className="categ ">Herbes et épices</h3>
        </div>
          <div className="list__product">
          {
            Data.slice(34, 44).map(( item,index) => (
              <ul className="ul__container">
                <li key={index}>{item.titre}</li>
              </ul>
            ))
          }
          </div>
      </div>
    </div>
  )
}

export default DashStock
