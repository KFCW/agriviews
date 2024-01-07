import React from "react";
import { Link } from "react-router-dom";
import "../styles/Components/NavBar/Agribox/style.css";

interface Icon {
    name: string;
    source: string;
}

interface DataBox {
    icon: Icon;
    titre: string;
    paragraph: string;
    link: string
}

const AgriviewsBox: React.FC<DataBox> = ({ icon, titre, paragraph, link }) => {
    return (
        <Link to={link} className="agri__container">
            <div className="icon">
                <img src={icon.source} alt={icon.name} height={60} width={60} className="img__icon"/>
            </div>
            <h2 className="titre">{titre}</h2>
            <p className="text__para">{paragraph}</p>
        </Link>
    );
};

export default AgriviewsBox;
