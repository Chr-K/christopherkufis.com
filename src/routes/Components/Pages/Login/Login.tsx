import { useState } from 'react'
import './Login.css'

export default function Login(){
    const [Client_time,setClienttime] = useState(new Date())
    var time_greeting:string
    
    if(Client_time.getHours()<12 && Client_time.getHours()>=5){
        time_greeting = 'Morning'
    }
    else if(Client_time.getHours()>=12 && Client_time.getHours()<=17){
        time_greeting = 'Afternoon'
        console.log(Client_time.getHours())
    }
    else if (Client_time.getHours()>=18 || Client_time.getHours()<=4){
        time_greeting = 'Evening'
    }

    return(
    <div>
        <div className='login_panel'>
        <div className='login_title_container'>
        <div className='login_title'>
        Good {time_greeting!}!
        </div>  
        </div>
        <div className='selection_menu_button_container'>
            <button id='login_button' className='button_selected' onClick={()=>{select_login()}}>Login</button>
            <button id='register_button' onClick={()=>{select_register()}}>SignUp</button>
        </div>
        <div className='login_input_container'>
        <input id='email_input' placeholder='Email' onClick={()=>{
        }}></input>
        <input id='password_input' placeholder='Password' onChange={()=>{apply_password('password_input')}}></input>
        <input id='confirm_password' placeholder='Confirm Password' onChange={()=>{apply_password('confirm_password')}}></input>
        </div>
            <div className='login_button_container'>
            <button className='button_transparent'>Forgot Password?</button>
            <button id='login_submit' className='button_t3'>Login</button>
            </div>
        </div>

    </div>
    )
        function select_register(){
            const login_button = document.getElementById('login_button')
            const register_button = document.getElementById('register_button')
            const confirm_password = document.getElementById('confirm_password')
            const login_submit_button = document.getElementById('login_submit')

            login_button?.classList.remove('button_selected')
            register_button?.classList.add('button_selected')
            if(confirm_password!.style.animationName != 'fade_in'){
                confirm_password!.style.display = 'block'
            confirm_password!.style.animationName = 'fade_in'
            }
            if(login_submit_button?.innerText!= 'Register'){
                login_submit_button!.innerText = 'Register'
            }
        }
        function select_login(){
            const login_button = document.getElementById('login_button')
            const register_button = document.getElementById('register_button')
            const confirm_password = document.getElementById('confirm_password')
            const login_submit_button = document.getElementById('login_submit')

            register_button?.classList.remove('button_selected')
            login_button?.classList.add('button_selected')
            if(confirm_password!.style.animationName != 'fade_out'){
                confirm_password!.style.animationName = 'fade_out'
                const timeout = setTimeout(() => {
                    if(confirm_password!.style.animationName == 'fade_out'){
                            confirm_password!.style.display = 'none'
                    }
                    clearTimeout(timeout)
                }, 1000);
            }
            if(login_submit_button?.innerText!= 'Login'){
                login_submit_button!.innerText = 'Login'
            }
        }
        function apply_password(field:string){
            const password_input = document.getElementById(field) as HTMLInputElement
            if(password_input!.value != ''){
                password_input.type = 'password'
            }
        }
}