import './Home.css'
import { Link } from 'react-router-dom'
import video from '/sample.mp4'

export default function Home(){
    return(
    <div className="home_container">
        <div id='intro_vid' className='introduction_video'>
        <video id='vid' src={video} controls></video>
        </div>
    <div className='home_nav_buttons_container'>
        <Link to={'/Projects'}><button className='button_t1 down_five'>Projects</button></Link>
        <Link to={'/Appointments'}><button className='button_t1 down_five'>Appointments</button></Link>
        <Link to={'/Login'}><button className='button_t1 down_five'>Login / Register</button></Link>
        
    </div>
    </div>
    )}
