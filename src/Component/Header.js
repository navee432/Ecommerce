import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Header.css'


function Header({ showBack, showTitle, showCart, onDeleteAll,CartTitle }) {

  const navigate = useNavigate();

  return (
    <div className="header-bar">
      {showBack && (
        <Button className="backarrow" onClick={() => navigate(-1)}>
          &larr;
        </Button>
      )}
      {showTitle && (
         <  h3 className="headertitle">My Shop</h3>
      )}
     {CartTitle &&(
        <h3 className="Cart-title">My Cart</h3>
     )}
      {showCart && (
        <Button className="cart-icon" onClick={() => navigate('/cartPage')}>
          🛒
        </Button>
      )}
      {onDeleteAll && (
        <Button className="deletebn" onClick={onDeleteAll}>
          Delete All
        </Button>
      )}
    </div>
  );
}

export default Header;