import React from 'react';

function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'} popup_type_lightbox`}>
      <div className="lightbox">
          <button
            className="popup__close-button"
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
          />
          <img className="lightbox__image"
            src={card.link} alt={card.name} />
          <h2 className="lightbox__image-title">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup
