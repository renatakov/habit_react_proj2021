import React, { Component } from 'react';
import styles from './HabitsPage.module.scss';
import Modal from '../../components/Modal/Modal';
// import HabitForm from '../../components/HabitForm/HabitForm';
import Form from '../../components/HabitForm/HabitForm';

import { Link } from 'react-router-dom';

import image from '../../images/camera.png';
import { getAllHAbits } from '../../redux/habits/operations';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { habits } from '../../redux/habits/selectors';

class HabitPage extends Component {
  state = {
    showModal: false,
  };

  // const dispatch = useDispatch();

  componentDidMount() {}

  showModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <>
        <section className={styles.habitPage}>
          <div className={styles.top}>
            <img src={image} className={styles.camera} alt="logo" />

            <button onClick={this.showModal} className={styles.btn}>
              &#43;
            </button>
            {this.state.showModal && (
              <Modal toggleModal={this.showModal}>
                {/* <HabitForm /> */}
                <Form handleClose={this.showModal} />
              </Modal>
            )}
          </div>

          <div className="logout">
            <button onClick={this.handleSubmit} className={styles.logoutBtn}>
              &#8592; Выйти
            </button>
          </div>

          <div id="calendar" className={styles.calendar}>
            <h1 className={styles.text}>Привычки</h1>
            <input type="date" name="calendar" />
          </div>
          {this.props.habits.length <= 0 ? (
            <p className={styles.defaultText}>
              У вас пока нет привычек <br />
              Нажмите +, чтобы <br />
              добавить первую
            </p>
          ) : (
            <ul className={styles.listOfHabits}>
              {this.props.habits.map(habit => {
                return (
                  <li className={styles.habitItem} key={habit.id}>
                    <Link to={`/habits/${habit.id}`}>{habit.name}</Link>
                  </li>
                );
              })}
            </ul>
          )}
          {/* {this.state.habitsList.length && ()} */}
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  habits: state.habits.habits,
});

const mapDispatchToProps = {
  getAllHAbits: getAllHAbits,
  logout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitPage);
