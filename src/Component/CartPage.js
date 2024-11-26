import { Button, Card, Col, Row } from "react-bootstrap";
import Header from "./Header";
import { useContext } from "react";
import { cartcontext } from "../App";
import './CartPage.css';

function CartPage() {
  const { cart, dispatch } = useContext(cartcontext);

    // Function to remove a single item from the cart
    const removeFromCart = (id) => {
      dispatch({ type: 'removefromcart', id });
    };
  
  
  // Handler to delete all items
  const handleDeleteAll = () => {
    dispatch({ type: 'deleteall' }); // Dispatch delete all action
  };

  return (
    <div>
    <Header showBack={true} CartTitle={true} onDeleteAll={handleDeleteAll} />

    <div className="bgr">
    
      {cart.length > 0 ? (
        <Row>
          {cart.map((product) => (
            <Col sm={12} md={6} lg={4} key={product.id} className="mb-4">
              <Card className="cart-card">
                <Card.Img variant="top" src={product.image} className="cart-img" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Card.Text>Category: {product.category}</Card.Text>
                  <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
    </div>
  );
}

export default CartPage;