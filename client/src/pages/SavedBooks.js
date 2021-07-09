import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";


function SavedBooks() {
  // Setting our component's initial state
  const [savedBooks, setSavedBooks] = useState([]);

  // // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBook()
      .then(res =>
        setSavedBooks(res.data)
      )
      .catch(err => console.log(err));
  };
  
  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook() {
    API.deleteBook()
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {savedBooks.length ? (
            <List>
              {savedBooks.map(savedBook => (
                <ListItem key={savedBook._id}>
                  <Link to={"/savedBook/" + savedBook._id}>
                    <img
                      src={
                        savedBook.image === undefined ? "" : `${savedBook.image}`
                      }
                      alt={savedBook.title}
                    />
                    <strong>
                      {savedBook.title + " "} by {" " + savedBook.authors}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteBook(savedBook._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Books to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default SavedBooks;
    



