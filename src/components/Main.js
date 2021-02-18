import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all(
      [
        api.getProfileData(),
        api.getInitialCards()
      ]
    )
    .then((values) => {
      const [userInfo, initialCards] = values;

      const items = initialCards.map(item => ({
        id: item._id,
        name: item.name,
        link: item.link,
        likes: item.likes,
        ownerId: item.owner._id
      }));

      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);

      setCards(items.reverse());
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <main className="content">
        <section className="profile">
          <div className="profile__avatar-container" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
          </div>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" onClick={props.onEditProfile} type="button" />
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
          <button className="profile__add-button" onClick={props.onAddPlace} type="button" />
        </section>

        <section className="cards">
          {cards.map(item => <Card {...item} key={item.id} onCardClick={props.onCardClick}/>)}
        </section>
    </main>
  );
}

export default Main;
