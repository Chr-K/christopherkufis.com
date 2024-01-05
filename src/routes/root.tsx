import { Outlet , Link, useNavigate } from "react-router-dom"
export default function Root(){
    const navigate = useNavigate()
    function handleClick(){
        navigate('/')
    }
return(
    <>
    <div className="container">
    <div className="nav">
            <span className="chris" onClick={handleClick}>Christopher Kufis</span>
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