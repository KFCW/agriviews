import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface ShoppingCardProps {
    className: string;
}

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }

  interface ShoppingCart {
    cart: {
        items :  CartItem[]
    };
    
  }
  




const ShoppingCard : React.FC<ShoppingCardProps> = ({className}) => { 
    const shoppingCart = useSelector((state: ShoppingCart) => state.cart);
    console.log("shopping cart : ",shoppingCart)
    return (
        <>
        <Link to="/user/shoppingbox">
            <div className={className}>
                {shoppingCart.items.length}
            </div>
        </Link>
        </>
    );
 }
 export default ShoppingCard;
