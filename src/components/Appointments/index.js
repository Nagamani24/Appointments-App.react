// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: []}

  onClickStarred = () => {
    const {appointmentsList} = this.state
    const filteredStarredList = appointmentsList.filter(
      each => each.starred === true,
    )
    this.setState({appointmentsList: filteredStarredList})
  }

  isStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, starred: !each.starred}
        }
        return each
      }),
    }))
  }

  addAppointment = event => {
    const {title, date} = this.state

    event.preventDefault()

    const newAppointment = {id: uuidv4(), title, date, starred: false}

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {appointmentsList, title, date} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <div className="top-container">
            <div className="details-container">
              <h1 className="heading">Add Appointment</h1>
              <form onSubmit={this.addAppointment}>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  className="inputs"
                  onChange={this.onChangeTitle}
                  value={title}
                />
                <br />
                <label htmlFor="date" className="label">
                  DATE
                </label>
                <br />
                <input
                  type="date"
                  id="date"
                  placeholder="dd/mm/yyyy"
                  className="inputs"
                  onChange={this.onChangeDate}
                  value={date}
                />
                <br />
                <button type="submit">Add</button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image"
              />
            </div>
          </div>
          <hr />
          <div className="bottom-container">
            <div className="header-container">
              <h1 className="head">Appointments</h1>
              <button
                type="button"
                className="star-btn"
                onClick={this.onClickStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-container">
              {appointmentsList.map(each => (
                <AppointmentItem
                  appointmentDetails={each}
                  key={each.id}
                  isStarred={this.isStarred}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
