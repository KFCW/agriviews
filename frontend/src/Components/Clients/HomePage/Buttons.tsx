import "../styles/Components/NavBar/ChoiceCategories/style.css";
import React, { useState } from 'react';
import Data, { Product } from './../HomePage/Data';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ProductButtonsProps {
  menuItems: string[];
  filterItems: (val: string) => void;
  setItem: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductButtons: React.FC<ProductButtonsProps> = ({ menuItems, filterItems, setItem }) => {
  const isMobile = useMediaQuery('(max-width: 768px)'); 
  const visibleCategories = isMobile ? menuItems.slice(0, 2) : menuItems;

  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    filterItems(menuItems[index]);
  };

  return (
    <div className='choice__categorie'>
      {visibleCategories.map((val, index) => (
        <button
          key={val}
          onClick={() => handleLinkClick(index)}
          className={`choice ${activeLink === index ? 'active' : ''}`}
        >
          {val}
        </button>
      ))}
      {isMobile && (
        <button onClick={() => setItem(Data)}>
          Autres
        </button>
      )}
    </div>
  );
};

export default ProductButtons;
