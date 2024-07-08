// shared/components/Header/ui/HeaderProfile.tsx

import React from "react";

const HeaderProfile: React.FC = () => {
  return (
    <nav className="header-profile">
      <ul className="header-profile__list">
        <li className="header-profile__item">
          <a href="/profile" className="header-profile__link">
            Авторизированный пользователь
          </a>
        </li>
        <li className="header-profile__item">
          <a href="/exit" className="header-profile__link">
            Выход
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderProfile;
