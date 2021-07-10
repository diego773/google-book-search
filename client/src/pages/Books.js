import React, { Component } from "react";
import API from "../utils/API";
import { List } from "../components/List";
import Form from "../components/Form";
import Book from "../components/Book";

class Books extends Component {
  
  state = {
    books: [],
    search: "",
  };
 
    // When this component mounts, search for the books "googlebooks"
    componentDidMount() {
      this.searchBooks("Google Books");
    }
    
    searchBooks = query => {
      API.getBooks(query)
      .then(res =>
        this.setState({
          books: res.data.items
        }))
        .catch(err =>
          console.log(err));
        };
        
        handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
        }
        
        handleFormSubmit = event => {
          event.preventDefault();
          this.searchBooks(this.state.search);
        };
        
        handleBookSave = id => {
          const book = this.state.books.find(book => book.id === id);
          
          API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
          }).then(() => this.getBooks());
        };
        
        // resultsList={this.state.books}
        // handleSave={this.handleSave}
  render() {
    return (
      <section>
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          search={this.state.search}
          />
        <List
          resultsList={this.state.books.map(book => {
            <Book
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.infoLink}
            Button={() => (
              <button
              onClick={() => this.handleBookSave(book.id)}
              >
                  Save
                </button>
              )}
              />
            })}
            />
      </section>
    );
  }
}
            

export default Books;

