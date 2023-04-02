import './appointments.css'
import { UserContext } from '../../../../Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
export default function Appointments(){
    let user = useContext(UserContext)

    var check_appointment_link = '/Login'

    return(
    <div className='appointment_container'>
        <div className="page_title">
        Appointments
        </div>
        <div className='appointment_button_container'>
            <Link to={'/appointments/request_appointment'}><button className="button_t1">Request Appointment</button></Link>
            <button className="button_t1">Check Existing</button>
        </div>
    </div>)
}