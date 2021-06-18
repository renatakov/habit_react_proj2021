import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../../redux/habits/operations';
import { HexColorPicker } from 'react-colorful';
import classes from './Form.module.scss';

export default function From({ handleClose }) {
  const [name, setName] = useState('');
  const [motivation, setMotivation] = useState('');
  const [color, setColor] = useState('#9f40c5');
  const [repeat, setRepeat] = useState();
  const [remindMe, setRemindMe] = useState(true);
  const [habits, setHabits] = useState([]);

  const dispatch = useDispatch();

  const Сolor = () => {
    const { color, setColor } = this;
    return <HexColorPicker color={color} onChange={setColor} />;
  };
  const handleChange = e => {
    const { value, name, checked } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'motivation':
        setMotivation(value);
        return;
      case 'color':
        setColor(value);
        break;
      case 'repeat':
        setRepeat();
        break;
      case 'remindMe':
        setRemindMe(checked);
        break;

      default:
        console.warn('Проверьте пожалуйста input');
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const habit = {
      name,
      motivation,
      color,
      repeat: 1,
      remindMe,
    };
    console.log(habit);
    dispatch(addHabit(habit));

    // localStorage.setItem('habit', JSON.stringify(habits));
    reset();
  };
  const reset = () => {
    setName('');
    setMotivation('');
    setColor('');
    setRepeat('');
    setRemindMe(true);
    handleClose()
  };
  return (
    <div className={classes.modal}>
      <div className={classes.formHeader}>
        <div className={classes.closeModal}>
          <h1 className={classes.title}>Новая Привычка</h1>
          <button className={classes.closeBtn} onClick={handleClose}>
            x
          </button>
        </div>
        <h4 className={classes.name}>Название</h4>
      </div>

      <form onSubmit={handleSubmit} className={classes.formBody}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Зарядка"
          onChange={handleChange}
          id="nameInput"
          className={classes.input}
        />
        <textarea
          name="motivation"
          onChange={handleChange}
          id="numberInput"
          placeholder="Мотивируй себя"
          className={classes.input1}
        ></textarea>

        <label htmlFor="button" className={classes.label}>
          Повторять
          {/* <select
            className={classes.option}
            onChange={handleChange}
            name="repeat"
          > */}
          <input
            type="number"
            name="repeat"
            onChange={handleChange}
            value={repeat}
            placeholder="Интервал в часах между повторениями"
            className={classes.repeat}
          />
        </label>
        <label htmlFor="numberInput" className={classes.label}>
          Выбери цвет
          <select
            className={classes.option}
            name="color"
            onChange={handleChange}
          >
            <option
              selected
              value="#00ffff"
              className={classes.color1}
            >
              color 1
            </option>
            <option
              value="#c0024a"
              className={classes.color2}
            >
              color 2
            </option>
            <option
                value="#390093"
                className={classes.color3}
            >
              color 3
            </option>
          </select>
        </label>

        {/* <FlipToggle /> */}

        <label className={classes.label}>
          Напомнить мне
          {/* <label class="switch"> */}
          {/* </label> */}
          <div className={classes.switch}>
            <input type="checkbox" name="remindMe" onChange={handleChange} />
            <span className={classes.slider}></span>
          </div>
          {/* <button
            className={classes.on}
            onClick={handleClick}
            name="remindMe"
          >
            {isToggleOn ? 'Включено' : 'Выключено'}
          </button> */}
          {/* <Toggle>
            <form action=""></form>
          </Toggle> */}
        </label>
        <button
          className={classes.save}
          type="submit"
          // disabled={!name.length || !habit.length}
        >
          Сохранить
        </button>
      </form>
    </div>
  );
}