import { UserContext } from "../../Context"
import { useContext,useEffect } from "react"

export default function Simulate_logged_in(){
    const {user,setUser} = useContext(UserContext)
    useEffect(()=>{
        if(user.logged_in===true){
            document.getElementById('simulate_button')!.style.backgroundColor = 'green'
        }
        else{
            document.getElementById('simulate_button')!.style.backgroundColor = 'white'

        }
    },[user])

    function simulate_logged_in(){
        if(user.logged_in===true)
        {
            setUser({...user,
                logged_in:false,
                })
        }
        else{
            setUser({...user,
                logged_in:true,
                })
                history.back()
        }

    }

    return(
        <div className='flex_center'>
        <button id='simulate_button' onClick={()=>{simulate_logged_in()}} className='button_t2'>Simulate Logged In</button>
        </div>)
}