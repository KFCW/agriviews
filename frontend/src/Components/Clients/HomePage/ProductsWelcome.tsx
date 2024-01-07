import "../../Clients/styles/Components/NavBar/ProductsWelcome/style.css";
import videoBg from "../../../assets/videos/presentation.mp4";

const ProductsWelcome: React.FC = () => {
  return (
    <div className="products__welcome">
      <div className="box__video">
        <video src={videoBg} autoPlay muted loop />
        <div className="box__content">
          <h1>Avec AgriDigital, </h1>
          <p className="welcome">Explorez notre gamme étendue de produits pour trouver ce que vous cherchez.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsWelcome;
