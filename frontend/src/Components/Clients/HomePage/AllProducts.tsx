import React, { useState } from 'react';
import Data, { Product } from "./Data.tsx";
import Card from './Card';
import Buttons from './Buttons';

const AllProducts: React.FC = () => {
  const [item, setItem] = useState<Product[]>(Data);
  const menuItems = [...new Set(Data.map((val) => val.domaine))];
  
  const filterItems = (categ: string) => {
    const newItems = Data.filter((newval) => newval.domaine === categ);
    setItem(newItems);
  };

  return (
    <div>
      <Buttons
        menuItems={menuItems}
        filterItems={filterItems}
        setItem={setItem}
      />
      
      <Card item={item} />
    </div>
  );
};

export default AllProducts;
