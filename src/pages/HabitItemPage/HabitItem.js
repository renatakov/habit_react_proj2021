import React, { useState } from 'react';
import style from './HabitItem.module.scss';
import { NavLink } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Line from './Line';

export default function HabitItem() {
  const [value, onChange] = useState(new Date());
  // const { Line } = this;
  return (
    <>
      <header>
        <NavLink to="/habits">
          <button>&#8592;Назад</button>
        </NavLink>
        <h1>Зарядка</h1>
        <button>Исправить</button>
      </header>
      <h2 className={style.habitInfoMainProgress}>Прогресс</h2>
      <p className={style.habitInfoMainProgress}>
        <span>50</span>%
      </p>
      <h3>График развития привычки</h3>
      <div>
        <button>С начала</button>
        <button>Неделя</button>
        <button>Месяц</button>
      </div>
      <div>
        <Line />
      </div>
      <div className={style.habitsCalendar}>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className={style.habitInfoFooter}>
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
