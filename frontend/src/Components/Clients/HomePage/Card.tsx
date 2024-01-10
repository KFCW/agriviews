import  { useState, useEffect } from "react";
import "../styles/Components/NavBar/ProductsBox/style.css";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "./Search"; 
import Data from "./Data";

interface Product {
  id: number;
  image: string;
  titre: string;
  price: number;
}

interface CardProps {
  item: Product[];
}

const Card: React.FC<CardProps> = ({ item }) => {
  const [searchItem, setSearchItem] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchItem(term);
  };

  useEffect( () => {
    
    const filteredItems = Data.filter( product  => product.titre.toLowerCase().includes(searchItem.toLowerCase()));

    setFilteredProducts(filteredItems);
  }, [searchItem, item] )

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  return (
    <div className='container__cards'>
      <Search  searchValue={searchItem} handleSearchChange={handleSearchChange} />
      <div className="row">
        {filteredProducts.length === 0 ? (
            <h3>Aucun produit ne correspond à votre recherche.</h3>
        ):(filteredProducts.map((val) => (
          <Link key={val.id} to={`/user/product/${val.id}`} className="product">
            <div className='product'>
              <div className="top__card">
                <FaShoppingBasket className="panier" />
              </div>
              <div className="body__card">
                <div>
                  <img src={val.image} alt="Produits alimentaires" />
                </div>
              </div>
              <div className="footer__card">
                <div className="top">
                  <div className="price">
                    <h3>{val.titre} (kg)</h3>
                    <p>{val.price} F CFA</p>
                  </div>
                </div>
                <button type="button">Achetez</button>
              </div>
            </div>
          </Link>
        )))}
      </div>
    </div>
  );
};

export default Card;
