import React, { useState, useEffect } from 'react';
import style from './HabitItem.module.scss';
import { NavLink } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Line from './Line';
import axios from 'axios';

import { deleteHabit } from '../../redux/habits/operations';
import { useDispatch } from 'react-redux';

export default function HabitItem({ match, history }) {
  const [value, onChange] = useState(new Date());
  const [habitInfo, setHabitInfo] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`/habits/${match.params.id}`).then(data => {
      setHabitInfo(data.data);
    });
  }, []);
  return (
    <>
      {habitInfo && (
        <>
          <header>
            <NavLink to="/habits">
              <button className={style.getBackBtn}>&#8592;Назад</button>
            </NavLink>
            <h1>{habitInfo.name}</h1>
            <button>Исправить</button>
          </header>
          <h2 className={style.habitInfoMainProgress}>Прогресс</h2>
          <p className={style.habitInfoMainProgress}>
            <span>50</span>%
          </p>
          <h3>График развития привычки</h3>
          {/* <div>
            <button>С начала</button>
            <button>Неделя</button>
            <button>Месяц</button>
          </div> */}
          <div>
            <Line createdAt={habitInfo.createdAt} />
          </div>
          <div className={style.habitsCalendar}>
            <Calendar onChange={onChange} value={value} />
          </div>
          <div className={style.habitInfoFooter}>
            <button className={style.habitInfoDeleteButton}>
              Удалить прогресс
            </button>
            <button onClick={() => dispatch(deleteHabit(habitInfo.id, history))} className={style.habitInfoDeleteButton}>
              Удалить привычку
            </button>
          </div>
        </>
      )}
    </>
  );
}
