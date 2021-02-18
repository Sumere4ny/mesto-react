import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import likeButton from '../images/like-button.svg';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">

      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
        children={(
          <>
            <input type="text" className="popup__input popup__input_name-field" id="name"
                name="name" minlength="2" maxlength="40" required />
            <span id='name-error' className='popup__input-error'></span>
            <input type="text" className="popup__input popup__input_profession" id="profession"
              name="about" minlength="2" maxlength="200" required />
            <span id='profession-error' className='popup__input-error'></span>
            <button type="submit" className="popup__submit">Сохранить</button>
          </>
        )}
      />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="edit-avatar"
        title="Обновить аватар"
        children={(
          <>
            <input type="url" className="popup__input popup__input_avatar-link" id="avatar-link"
              name="link" placeholder="Ссылка на картинку" required />
            <span id='avatar-link-error' className='popup__input-error'></span>
            <button type="submit" className="popup__submit">Сохранить</button>
          </>
        )}
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-new-card"
        title="Новое место"
        children={(
          <>
            <input type="text" className="popup__input popup__input_place-name" id="place-name"
              name="name" placeholder="Название" minlength="2" maxlength="30" required />
            <span id='place-name-error' className='popup__input-error'></span>
            <input type="url" className="popup__input popup__input_place-link" id="place-link"
              name="link" placeholder="Ссылка на картинку" required />
            <span id='place-link-error' className='popup__input-error'></span>
            <button type="submit" className="popup__submit">Создать</button>
          </>
        )}
      />

      <PopupWithForm
        name="delete-card"
        title="Вы уверены"
        children={(
          <button type="submit" className="popup__submit popup__submit-confirm">Да</button>
        )}
      />

      <ImagePopup />

      <template id="card-template">
        <div class="cards__item">
          <img class="cards__image" src="https://cdn130.picsart.com/307655146346211.png" alt="Изображение" />
          <button class="cards__remove-button" type="button">
          </button>
          <div class="cards__description">
            <h2 class="cards__title"></h2>
            <div class="cards__like-container">
              <img src={likeButton} class="cards__like-button" alt="Лайк" />
              <span class="cards__like-number">0</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
