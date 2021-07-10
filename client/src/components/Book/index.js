import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

function Book({ title, authors, link, description, image, Button }) {
  return (

    <ListItem>
      <h1>Search and Save</h1>
       <Row className="flex-wrap-reverse">
         <Col size="md-8">
           <h3 className="font-italic">{title}</h3>
         </Col>
         <Col size="md-4">
           <div className="btn">
            <a className="btn btn-dark"
              target="_blank"
              rel="noopener noreferrer"
              href={link}>
               View
             </a>
           </div>
             <Button />
         </Col>
       </Row>
       <Row>
         <Col size="md-6">
          <h4 className="font-italic large">
            Written by {authors}
          </h4>
         </Col>
       </Row>
       <Row>
         <Col size="12 sm-1 md-1">
          <img className="img-thumbnail img-fluid w-50"
            src={image} alt={title}
          />
         </Col>
         <Col size="12 sm-8 md-10">
           <p>{description}</p>
         </Col>
       </Row>
    </ListItem>
  );
}

export default Book;