import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onAddPlace,
  onEditProfile,
  onCardClick,
  cards,
  handleCardLike,
  onCardDelete,
}) {
  const { name, about, avatar } = React.useContext(CurrentUserContext);
  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" alt="Фото профиля" src={avatar} />
            <button
              type="button"
              className="profile__button-avatar-edit"
              onClick={onEditAvatar}
            />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{name}</h1>
            <button
              type="button"
              className="profile__button-edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <h2 className="profile__about-name">{about}</h2>
        </div>
        <button
          type="button"
          className="profile__button-add"
          onClick={onAddPlace}
          title="Добавить фото"
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
