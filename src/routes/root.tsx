import { Outlet } from "react-router-dom"
export default function Root(){
return(
    <>
    <div className="container">
    <div className="nav">
            <h1>Christopher Kufis</h1>
        </div>
        <div className="content">
        <Outlet></Outlet>
        </div>
    </div>
    </>
)
}