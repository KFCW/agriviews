// Dans ChoiceCategories.tsx
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Components/NavBar/ChoiceCategories/style.css";


const ChoiceCategories: React.FC = () => {
  const categories = ["Céréales et Grains", "Légumes", "Fruits", "Légumineuses", "Produits dérivés", "Herbes et Épices", "Autres"];
  const [activeLink, setActiveLink] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    navigate(`/category/${encodeURIComponent(categories[index])}`);
  };

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div className="choice__categorie">
      {categories.map((category, index) => (
        (isMobile && index > 2 && index !== activeLink) ? null : (
          <Link
            key={index}
            to={`/category/${encodeURIComponent(category)}`}
            className={`choice ${activeLink === index ? "active" : ""}`}
            onClick={() => {
              handleLinkClick(index);
              
            }}
          >
            
            {category}
          </Link>
        )
      ))}
    </div>
  );
};

export default ChoiceCategories;
