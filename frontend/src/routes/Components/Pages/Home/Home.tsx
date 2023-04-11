import { Link } from 'react-router-dom'

export default function Home(){
    return(
    <div className='page_container'>
        <div id='intro_vid a' className='introduction_video down_5'>
        </div>
    <div className='button_container_center_single_stack down_5'>
        <Link to={'/Projects'}><button className='button_t1 black_background white'>Projects</button></Link>
        <Link to={'/Appointments'}><button className='button_t1 down_5 black_background white'>Appointments</button></Link>
        <Link to={'/Login'}><button className='button_t1 down_5 black_background white'>Login / Register</button></Link>
    </div>
    </div>
    )}
