import React from "react";
import "./Photos.scss";

export const CollectionModal = ({ name, image }) => {
  return (
    <div className="collectionTwo">
      <h4>{name}</h4>
      <div>
        <img className="collectionTwo__max" src={image[0]} alt="Item" />
      </div>
      <div>
        <img className="collectionTwo__max" src={image[1]} alt="Item" />
      </div>
      <div>
        <img className="collectionTwo__max" src={image[2]} alt="Item" />
      </div>
      <div>
        <img className="collectionTwo__max" src={image[3]} alt="Item" />
      </div>
    </div>
  );
};
