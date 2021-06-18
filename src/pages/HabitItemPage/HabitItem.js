import React, { Component } from 'react';
import style from './HabitItem.module.scss';
import { NavLink } from 'react-router-dom';

class HabitItem extends Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/habits">
            <button>&#8592;Назад</button>
          </NavLink>
          <h1>Зарядка</h1>
          <button>Исправить</button>
        </header>
        <h2>Прогресс</h2>
        <p>
          <span>50</span>%
        </p>
        <h3>График развития привычки</h3>
        <div>
          <button>С начала</button>
          <button>Неделя</button>
          <button>Месяц</button>
        </div>
        <div>{/* график */}</div>
        <div>{/* календарь */}</div>
        <div>
          <button className={style.habitInfoDeleteButton}>
            Удалить прогресс
          </button>
          <button className={style.habitInfoDeleteButton}>
            Удалить привычку
          </button>
        </div>
      </>
    );
  }
}

export default HabitItem;
