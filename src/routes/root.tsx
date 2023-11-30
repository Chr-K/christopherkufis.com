import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Root(){
return(
    <div className="primary">
        <div className="top_nav secondary">
            <div className="navbtn-container links">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            </div>

        </div>
        <Outlet></Outlet>
    </div>
)
}