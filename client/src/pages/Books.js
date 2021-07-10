import React, { Component } from "react";
import API from "../utils/API";
import Form from "../components/Form";
import Book from "../components/Book";
import { List, ListItem } from "../components/List";

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
    .then(res => {
      console.log("res.data.items", res.data.items);
      this.setState({
        books: res.data.items
      })
    })
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
    _Id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors,
    description: book.volumeInfo.description,
    image: book.volumeInfo.imageLinks.thumbnail,
    link: book.volumeInfo.infoLink
  })
    .then(() =>
    this.getBooks());
  };
          
        
  render() {
    if (this.state.books.length > 0) {
      return (
        <section>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            search={this.state.search}
          />
          <List>
          <ListItem>
          <Book 
            key={this.state.books[0].id}
            title={this.state.books[0].volumeInfo.title}
            authors={this.state.books[0].volumeInfo.authors}
            description={this.state.books[0].volumeInfo.description}
            image={this.state.books[0].volumeInfo.imageLinks.thumbnail}
            link={this.state.books[0].volumeInfo.infoLink}
            Button={() => (
              <button
              // onClick={() => this.state.handleBookSave(book.id)}
              >
                Save
              </button>
            )}
          />
          </ListItem>
          </List>
        </section>
      );
    }
    return (
      <section>
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          search={this.state.search}
        />
      </section>

    );
  }
}
export default Books;
                

            



