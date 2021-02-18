import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_lightbox">
      <div className="lightbox">
          <button className="popup__close-button" type="button" ariaLabel="Закрыть"></button>
          <img className="lightbox__image"
            src="#" alt="Просмотр изображения" />
          <h2 className="lightbox__image-title"></h2>
      </div>
    </div>
  );
}

export default ImagePopup
