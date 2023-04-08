import { useContext, useEffect, useState } from 'react'
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
        <div className='card_container down_10 blue_text'>
        <div className='card_title_container'>
        <div className='card_title blue'>
        Good {time_greeting!}!
        </div>  
        </div>
        <div className='card_selector_container'>
            <button id='login_button' className='selected_t1 card_selector text_t2' onClick={()=>{select_login()}}>Login</button>
            <button id='register_button' className='card_selector text_t2' onClick={()=>{select_register()}}>SignUp</button>
        </div>
        <div className='card_input_container'>
        <input id='email_input' placeholder='Email' onClick={()=>{
        }}></input>
        <input id='password_input' placeholder='Password' onChange={()=>{apply_password('password_input')}}></input>
        <input id='confirm_password' className='visibility_none default_animation' placeholder='Confirm Password' onChange={()=>{apply_password('confirm_password')}}></input>
        </div>
            <div className='login_button_container'>
            <button className='button_no_background text_t1 down_2_half right_5'>Forgot Password?</button>
            <button id='login_submit' className='button_t2 text_t2 float_right white blue_background'>Login</button>
            </div>
        </div>

    </div>
    )
        function select_register(){
            const login_button = document.getElementById('login_button')
            const register_button = document.getElementById('register_button')
            const confirm_password = document.getElementById('confirm_password')
            const login_submit_button = document.getElementById('login_submit')

            login_button?.classList.remove('selected_t1')
            register_button?.classList.add('selected_t1')
            if(confirm_password!.style.animationName != 'fade_in'){
                confirm_password!.style.visibility = 'visible'
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

            register_button?.classList.remove('selected_t1')
            login_button?.classList.add('selected_t1')
            if(confirm_password!.style.animationName != 'fade_out'){
                confirm_password!.style.animationName = 'fade_out'
                const timeout = setTimeout(() => {
                    if(confirm_password!.style.animationName == 'fade_out'){
                            confirm_password!.style.visibility = 'hidden'
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