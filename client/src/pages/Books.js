import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [result, setResult] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setResult({...setResult, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (result.title && result.authors) {
      API.saveBook({
        title: books.title,
        authors: books.author,
        image: books.thumbnail,
        description: books.description,
        link: books.previewLink
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

  return (
   
    <div>
      <Jumbotron className="fluid">
        <h1 className="search-header">Google Book Search</h1>
      </Jumbotron>
      <Container fluid="md" className="search-container">
        <Row>
          <Col size="md-6">
            <Input
              onChange={handleInputChange}
              onSubmit={handleFormSubmit}
              name="title"
              placeholder="Enter title, author, or keywords (required)"
            />
            <FormBtn onClick={handleFormSubmit}>Search</FormBtn>
            {books.length ? (
              <List>
                {result.map((books => {
                  console.log(JSON.stringify(books, null, 2));
                  return (
                    <ListItem key={setBooks.id}>
                      <Link to={"/books/" + setBooks.id}>
                        <div className="book-title">
                          <strong>
                            {API.saveBook.volumeInfo.title} by {API.saveBook.volumeInfo.authors}
                          </strong>
                        </div>
                        
                        <img
                          src={
                            API.saveBook.volumeInfo.imageLinks === undefined
                            ? ""
                            : `${API.saveBook.volumeInfo.imageLinks.thumbnail}`
                          }
                          alt={API.saveBook.volumeInfo.title}
                          />
                      </Link>
                      <button
                        onClick={() => handleFormSubmit()}
                        className="btn"
                      >
                        Save Book to List
                      </button>
                    </ListItem>
                  );
                }))}
              </List>
            ) : (
              <h3> No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Books;

