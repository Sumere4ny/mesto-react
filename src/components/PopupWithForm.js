import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen && 'popup_opened'} popup_type_${props.name}`}>
      <div className="popup__container">
        <button type="button" onClick={props.onClose} className="popup__close-button" aria-label="Закрыть" />
        <h2 className="popup__title">{props.name}</h2>
        <form className="popup__form" name={props.name} noValidate onSubmit={props.onSubmit} >
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm