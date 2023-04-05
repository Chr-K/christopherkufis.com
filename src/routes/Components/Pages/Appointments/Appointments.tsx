import './appointments.css'
import { UserContext } from '../../../../Context'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Appointments(){
const {user,setUser} = useContext(UserContext)
let request_link:string
if(user.logged_in==false){
request_link = '/login'
}
else{
    request_link = '/appointments/request_appointment'
}

    return(
    <div className='appointment_container'>
        <div className="page_title">
        Appointments
        </div>
        <div className='appointment_button_container'>
            <Link to={request_link}><button className="button_t1 down_five">Request Appointment</button></Link>
            <button className="button_t1 down_five">Check Existing</button>
        </div>
    </div>)
}