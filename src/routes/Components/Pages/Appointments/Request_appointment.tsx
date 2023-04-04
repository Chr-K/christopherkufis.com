import './appointments.css'
import Selector from '../../selector/Selector'
import type { options } from '../../selector/Selector'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Request_appointment(){
    const appointment_type_options:options = {option:['Interview','Contract Proposal','Other']}
    const appointment_date_options:options = {option:['January','Febuary','March','April','May','June','July','August','September','October','November','December']}
    const appointment_time_options:options = {option:['6:00','6:30','7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','1:00','1:30','2:00','2:30','3:00','3:30','4:00','4:30',
    '5:00','5:30']}
    const [appointment_days,setAppointment_days] = useState({option:['']})
    const idlist:Array<string> = ['appointment_type','appointment_month','appointment_day','appointment_time']
    function set_type(value:string,id:string){
        document.getElementById(id)!.innerText = value;
    }
    function set_month(value:string,id:string){
        document.getElementById(id)!.innerText = value;
        var year = new Date().getFullYear()
        var month:number
        switch(value){
            case 'January':
                month = 1
                break;
            case 'Febuary':
                month = 2;
                break
            case 'March':
                month = 3;
                break
            case 'April':
                month = 4;
                break
            case 'May':
                month = 5;
                break
            case 'June':
                month = 6;
                break
            case 'July':
                month = 7;
                break;
            case 'August':
                month = 8;
                break
            case 'September':
                month = 9;
                break;
            case 'October':
                month = 10;
                break;
            case 'November':
                month = 11;
            case 'December':
                month = 12;
        }
        var daysinmonth = new Date(year,month!,0).getDate()
        populate_days(daysinmonth)
    }
    function set_time(value:string,id:string){
        document.getElementById(id)!.innerText = value;
        if(appointment_time_options.option.slice(0,12).includes(value)){
            ampm_switch('AM')
        }
        else if (appointment_time_options.option.slice(12).includes(value)){
            ampm_switch('PM')

        }
    }
    function populate_days(daysinmonth:number){
        var day_arr:options ={option:[]}
        for(var i = 1; i<=daysinmonth;i++){
            day_arr.option.push(i.toString())
        }
        document.getElementById('appointment_day_value')!.innerText = 'Day'
        document.getElementById('appointment_day_value')!.style.opacity = '100%'
        setAppointment_days({option:day_arr.option})
    }
    function ampm_switch(selection:string){
        var target_on:string = ''
        var target_off:string = ''
        if(selection == 'AM'){
            target_on = 'am_button'
            target_off = 'pm_button'
        }
        else if (selection == 'PM')
        {
            target_on = 'pm_button'
            target_off = 'am_button'
        }
        document.getElementById(target_on)!.style.backgroundColor = 'orange'
        document.getElementById(target_on)!.style.opacity = '100%'
        document.getElementById(target_off)!.style.backgroundColor = 'gray'
        document.getElementById(target_off)!.style.opacity = '50%'
    }
return(
<div>
    <div className="page_title_med down_five">
        Request an Appointment
    </div>
    <div className='appointment_form_container'>

    <Selector idlist={idlist} id={'appointment_type'} options={appointment_type_options} place_holder={'Appointment Type'} callback={set_type}></Selector>
    <Selector idlist={idlist} id={'appointment_month'} options={appointment_date_options} place_holder={'Month'} callback={set_month}></Selector>
    <Selector idlist={idlist} id={'appointment_day'} options={appointment_days} place_holder={'Day'} callback={set_type}></Selector>
    <Selector idlist={idlist} id={'appointment_time'} options={appointment_time_options} place_holder={'Time'} callback={set_time}></Selector>
    <div className='button_container'>
    <button onClick={()=>{ampm_switch('AM')}} id='am_button' className='button_t4 space_right down_five'>AM</button>
    <button onClick={()=>{ampm_switch('PM')}}  id='pm_button'className='button_t4 space_left down_five'>PM</button>
    </div>
    <Link to={'/appointments/appointment_confirm'}><button className='button_t1 down_five'>Next</button></Link>

    </div>
</div>)
}   