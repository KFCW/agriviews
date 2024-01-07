import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBasket } from "react-icons/bs";
import { IoMenu, IoClose } from "react-icons/io5";
import "../../Clients/styles/Components/NavBar/style.css";
import ShoppingCard from "./ShoppingCard";



interface NavItemProps {
  to: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}


const NavItem: React.FC<NavItemProps> = ({ to, label, isSelected, onClick }) => (
  <li>
    <Link
      to={to}
      className={`hover:text-orange transition-colors links ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);

const NavBar: React.FC = () => {
  const [mobile, setMobile] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string>("/");

  const handleLinkClick = (link: string) => {
    setMobile(false);
    setSelectedLink(link);
  };

  


  return (
    <header className="nav-container">
      <div className="nav-content">
        <nav className="nav-container">
          <Link to="/user/home" className="logo">AgriDigital</Link>
          <ul className={mobile ? "mobile-menu-links" : "ul"} onClick={() => setMobile(false)}>
            <NavItem to="/user/home" label="Accueil" isSelected={selectedLink === "/home"} onClick={() => handleLinkClick("/home")} />
            <NavItem to="/user/products" label="Produits" isSelected={selectedLink === "/products"} onClick={() => handleLinkClick("/products")} />
            <NavItem to="/user/agriviews" label="Agriviews" isSelected={selectedLink === "/agriviews"} onClick={() => handleLinkClick("/agriviews")} />
            <NavItem to="/user/contact" label="Contacts" isSelected={selectedLink === "/contact"} onClick={() => handleLinkClick("/contact")} />
          </ul>
          <div className="box-full">
            <div className="icons">

              <div className="info">
                <ShoppingCard className="info-bule"/>
                <BsBasket />
              </div>
            </div>
            <div className="profil">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsfGVufDB8fDB8fHww" alt="Image de profil" className="img" />
            </div>
          </div>
          <div className="mobile-menu" onClick={() => setMobile(!mobile)}>
            {mobile ? <IoClose /> : <IoMenu />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
