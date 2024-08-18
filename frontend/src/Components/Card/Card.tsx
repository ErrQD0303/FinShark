import React from "react";
import "./Card.css";

// Use interface For data and type checking of Props
interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzw4tI-97axmZP8UD_eki8ho5mchg4ZMKaQ&s"
        alt="Image"
      />
      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
        architecto?
      </p>
    </div>
  );
};

export default Card;
