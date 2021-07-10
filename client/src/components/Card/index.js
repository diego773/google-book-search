import React from "react";


function Card({ children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
