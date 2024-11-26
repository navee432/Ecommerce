import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import Header from './Header';

function Homepage() {
    const [products, setProducts] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products") 
            .then(res => {
                setProducts(res.data); 
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
      <div >
        <Header showBack={true}showTitle={true} showCart={true}/>
        <div className='bagr'> 
          
            <Row className="justify-content-center gap-5">
                {products.map(item => (
                    <Col sm={4} key={item.id}>
                 <Card className='cardbox'>
               <Card.Img variant="top" src={item.image} className='pict' />
                <Card.Body>
             <Card.Title className='title'>{item.title}</Card.Title>
              <Card.Text className='price'>Price: ${item.price}</Card.Text>
               <Card.Text>Category: {item.category}</Card.Text>
               <button  className="ViewB" onClick={() => navigate(`/ProductDetail/${item.id}`)}>View</button>
             </Card.Body>
                 </Card>
                 </Col>
                ))}
            </Row>
        </div>
        </div>
    );
}

export default Homepage;
