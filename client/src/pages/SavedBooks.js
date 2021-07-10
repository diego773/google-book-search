import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Card from "../components/Card";
import Book from "../components/Book";


class SavedBooks extends Component {
  // Setting our component's initial state
  state = {
    book: []
  };
 
  componentDidMount() {
    this.getBook();
  }
  // Loads all books and sets them to books
  loadBooks() {
    API.getBooks()
      .then(res =>
        this.setState({ saved: res.data })
      )
      .catch(err => console.log(err));
  };
  
  // Deletes a book from the database with a given id, then reloads books from the db
  handleDeleteBook = id => {
    API.deleteBook(id)
      .then(res => this.getSavedBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search n Save</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List className="list">
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books Here</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default SavedBooks;
    



