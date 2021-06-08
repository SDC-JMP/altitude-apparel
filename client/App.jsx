import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ProductContext} from './context.js';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import {Nav, Navbar, NavDropdown, Container,
  FormControl, Button, Form} from 'react-bootstrap';
import StarterOutlineRR from './RatingsReviews/StarterOutlineRR.jsx';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';

function App() {
  const [currentId, setCurrentId] = useState(18080);
  const [currentProduct, updateProduct] = useState([]);
  const [reviews, updateReview] = useState([]);
  // /18078/styles'
  // /${currentProduct.product_id}/styles
  const fetch = () => {
    axios.get(`/products/${currentId}`)
        .then((response) => {
          console.log('response.data in app - fetch products', response.data);
          updateProduct(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const fetchReviews = () => {
  axios.get(`/reviews/${currentId}`)
      .then((response) => {
        console.log('response.data in app - fetch reviews', response.data.results);
        updateReview(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
};


  useEffect(() => {
    fetch();
    fetchReviews();
    // products.map((product) => fetchStyles({product}));
  }, []);

  return (
    <ProductContext.Provider value={{
      currentProduct,
    }}>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Altitude Apparel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search"
                className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <ProductDetails />
      <StarterOutlineRR />
      <QuestionsAnswers />
    </ProductContext.Provider>
  );
}

export default App;
