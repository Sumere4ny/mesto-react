import React from 'react';
import likeButton from '../images/like-button.svg';

function Card({ name, link, likes, onCardClick }) {

  const cardClickHandler = () => {
    onCardClick({ name, link });
  };

  return (
    <div classNameName="cards__item">
      <img className="cards__image" src={link} alt={name} onClick={cardClickHandler} />
      <button className="cards__remove-button" type="button"></button>
      <div className="cards__description">
        <h2 className="cards__title">{name}</h2>
        <div className="cards__like-container">
          <img src={likeButton} className="cards__like-button" alt="Лайк" />
          <span className="cards__like-number">{likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
