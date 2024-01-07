// CategoryPage.tsx
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

import ChoiceCategories from "./ChoiceCategories";
import ProductsWelcome from "./ProductsWelcome";
import Footer from "./Footer";



const CategoryPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Utilisez l'ID pour charger les données de la catégorie depuis votre backend ou utilisez-le directement

    return (
        <>
            <NavBar />
            <ProductsWelcome />
            <ChoiceCategories />
            <h2>Catégorie: {id}</h2>
            {/* Ajoutez le contenu spécifique à chaque catégorie ici */}
            <Footer />
        </>
    );
};

export default CategoryPage;
