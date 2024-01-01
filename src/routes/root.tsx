import { Outlet , Link } from "react-router-dom"
export default function Root(){
return(
    <>
    <div className="container">
    <div className="nav">
            <span className="chris">Christopher Kufis</span>
            <div className="nav-btn">
                <Link to={"/"} >Home</Link>
            </div>
        </div>
        <div className="content">
        <Outlet></Outlet>
        </div>
    </div>
    </>
)
}