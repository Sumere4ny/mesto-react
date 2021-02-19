import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">

      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль">
          <>
            <input type="text" className="popup__input popup__input_name-field" id="name"
                name="name" minlength="2" maxlength="40" required />
            <span id='name-error' className='popup__input-error'></span>
            <input type="text" className="popup__input popup__input_profession" id="profession"
              name="about" minlength="2" maxlength="200" required />
            <span id='profession-error' className='popup__input-error'></span>
            <button type="submit" className="popup__submit">Сохранить</button>
          </>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="edit-avatar"
        title="Обновить аватар">
          <>
            <input type="url" className="popup__input popup__input_avatar-link" id="avatar-link"
              name="link" placeholder="Ссылка на картинку" required />
            <span id='avatar-link-error' className='popup__input-error'></span>
            <button type="submit" className="popup__submit">Сохранить</button>
          </>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-new-card"
        title="Новое место">
          <>
            <input type="text" className="popup__input popup__input_place-name" id="place-name"
              name="name" placeholder="Название" minlength="2" maxlength="30" required />
            <span id='place-name-error' className='popup__input-error'></span>
            <input type="url" className="popup__input popup__input_place-link" id="place-link"
              name="link" placeholder="Ссылка на картинку" required />
            <span id='place-link-error' className='popup__input-error'></span>
            <button type="submit" className="popup__submit">Создать</button>
          </>
      </PopupWithForm>


      <PopupWithForm
        name="delete-card"
        title="Вы уверены">
          <button type="submit" className="popup__submit popup__submit-confirm">Да</button>
      </PopupWithForm>

      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />

    </div>
  );
}

export default App;
