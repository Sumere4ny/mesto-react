import avatar from '../images/avatar.jpg';

function Main(props) {
  return (
    <main class="content">
        <section class="profile">
          <div class="profile__avatar-container" onClick={props.onEditAvatar}>
            <img class="profile__avatar" src={avatar} alt="Аватар профиля" />
          </div>
          <div class="profile__info">
            <div class="profile__title">
              <h1 class="profile__name">Жак-Ив Кусто</h1>
              <button class="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
            </div>
            <p class="profile__profession">Исследователь океана</p>
          </div>
          <button class="profile__add-button" onClick={props.onAddPlace} type="button"></button>
        </section>

        <section class="cards">

        </section>
    </main>
  );
}

export default Main;
