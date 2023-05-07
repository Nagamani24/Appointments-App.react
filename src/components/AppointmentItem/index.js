// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, isStarred} = props
  const {id, title, date, starred} = appointmentDetails
  const formattedDate = new Date(date)
  const newDate = formattedDate.getDate()
  const month = formattedDate.getMonth()
  const year = formattedDate.getFullYear()
  const newFormattedDate = format(
    new Date(year, month, newDate),
    'dd MMMM yyyy, EEEE',
  )

  const imageUrl = starred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClick = () => {
    isStarred(id)
  }

  return (
    <li className="list-container">
      <div className="star-head-container">
        <p className="title">{title}</p>
        <button
          className="str-button"
          type="button"
          onClick={onClick}
          data-testid="star"
        >
          <img src={imageUrl} alt="star" />
        </button>
      </div>
      <p>Date:{newFormattedDate}</p>
    </li>
  )
}

export default AppointmentItem
