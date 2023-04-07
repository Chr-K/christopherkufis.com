import { UserContext } from '../../../../Context'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Appointments(){
const {user,setUser} = useContext(UserContext)
let request_link:string
let check_existing_link:string
if(user.logged_in==false){
request_link = '/login'
check_existing_link = '/login'
}
else{
    request_link = '/appointments/request_appointment'
    check_existing_link = '/appointments/check_existing'
}

    return(
    <div className='page_container page_t1'>
        <div className="page_title">
        Appointments
        </div>
        <div className='button_container_center_single_stack'>
            <Link to={request_link}><button className="button_t1 black_background white down_5">Request Appointment</button></Link>
            <Link to={check_existing_link}><button className="button_t1 black_background white down_5">Check Existing</button></Link>
        </div>
    </div>)
}