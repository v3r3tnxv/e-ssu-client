// shared/components/Header/ui/HeaderMenu.tsx

// shared/components/Header/ui/HeaderMenu.tsx

import React from "react";
import { Link } from "@remix-run/react";

const HeaderMenu: React.FC = () => {
  return (
    <nav className="globalnav">
      <ul className="globalnav__list">
        <li className="globalnav__item">
          <Link to="/" className="globalnav__link">
            <img className="globalnav__logo" src="/logo.png" alt="Logo" />
          </Link>
        </li>
        <li className="globalnav__item">
          <Link to="/groups" className="globalnav__link">
            Группы
          </Link>
        </li>
        <li className="globalnav__item">
          <Link to="/subjects" className="globalnav__link">
            Дисциплины
          </Link>
        </li>
        <li className="globalnav__item">
          <Link to="/subgroups" className="globalnav__link">
            Подгруппы
          </Link>
        </li>
        <li className="globalnav__item">
          <Link to="/users" className="globalnav__link">
            Пользователи
          </Link>
        </li>
        <li className="globalnav__item">
          <Link to="/teachers" className="globalnav__link">
            Преподаватели
          </Link>
        </li>
        <li className="globalnav__item">
          <Link to="/statuses" className="globalnav__link">
            Статусы
          </Link>
        </li>
        <li className="globalnav__item">
          <Link to="/students" className="globalnav__link">
            Студенты
          </Link>
        </li>
        <li className="globalnav__item">
          <Link to="/lessons" className="globalnav__link">
            Занятия
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
