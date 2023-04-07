import { useLocation } from "react-router"
import Check_box from "../../../../assets/SVG/checkmark"
export default function Appointment_confirm(){
    const location = useLocation()
    const appointment = location.state.appointment
    console.log(appointment)
    function Toggle_reminder(value:string){
        const appointment_notification_yes = document.getElementById('appointment_notification_yes')
        const appointment_notification_no = document.getElementById('appointment_notification_no')
        var check_1 = document.getElementById('email_box_mark')!.firstChild as HTMLElement
        var check_2 = document.getElementById('email_box_mark')!.lastChild as HTMLElement
        var check_3 = document.getElementById('text_box_mark')!.firstChild as HTMLElement
        var check_4 = document.getElementById('text_box_mark')!.lastChild as HTMLElement


        var box_1 = document.getElementById('email_box')! as HTMLInputElement
        var box_2 = document.getElementById('text_box')! as HTMLInputElement
        const checkbox_cont = document.getElementById('notification_checkbox_container')
        if(value == 'YES'){
            appointment_notification_yes!.style.backgroundColor = 'Orange'
            appointment_notification_no!.style.backgroundColor = 'gray'
            appointment_notification_yes!.style.opacity = '100%'
            appointment_notification_no!.style.opacity = '50%'
            checkbox_cont!.style.visibility = 'visible'
        }
        else if(value = 'NO')
        {   
            appointment_notification_yes!.style.backgroundColor = 'gray'
            appointment_notification_no!.style.backgroundColor = 'Orange'
            appointment_notification_yes!.style.opacity = '50%'
            appointment_notification_no!.style.opacity = '100%'
            checkbox_cont!.style.visibility = 'hidden'
            check_1.style.strokeDashoffset = '75'
            check_2.style.strokeDashoffset = '75'
            check_3.style.strokeDashoffset = '75'
            check_4.style.strokeDashoffset = '75'

            check_1.style.animationName = 'none'
            check_2.style.animationName = 'none'     
            check_3.style.animationName = 'none'
            check_4.style.animationName = 'none'   

            box_1.checked = false
            box_2.checked = false
        }
    }
    function tickbox(id:string){
        var box = document.getElementById(id) as HTMLInputElement
        var check_1 = document.getElementById(id+'_mark')!.firstChild as HTMLElement
        var check_2 = document.getElementById(id+'_mark')!.lastChild as HTMLElement

        if(box.checked){
            check_1!.style.animationName = 'uncheck'
            check_2!.style.animationName = 'uncheck'
            box.checked = false
        }
        else{
            check_1!.style.animationDirection = 'normal'
            check_2!.style.animationDirection = 'normal'   
            check_1!.style.animationName = 'check_mark'
            check_2!.style.animationName = 'check_mark'
            box.checked = true
        }
    }
    return(
    <div>
        <div id="add_phone" className="pop_up">
            <div className="close_button">
            <span onClick={()=>{
                document.getElementById('add_phone')!.style.display = 'none'
            }}>x</span>
            </div>
        <div className=" page_title">Add a phone  number</div>
        <div className="flex_center card_input_container">
        <input className="down_5" placeholder="Phone"></input>

        </div>
        <div className="flex_center down_10">
            <button className="button_t2 white black_background">Confirm</button>
        </div>
        </div>
        <div className="white page_title">
            Confirm Appointment
        </div>
        <div className="flex_center down_5 w_100">

        <table className="table_t1">
            <tbody>
            <tr>
                <td className="text_t2 white">Date: </td>
                <td className="text_t2 white">
                   {appointment.month +' '+appointment.day + ', ' + appointment.year}
                </td>
            </tr>
            <tr>
                <td className="text_t2 white">Time: </td>
                <td className="text_t2 white">
                    {appointment.time + ' ' + appointment.ampm}
                </td>
            </tr>
            <tr>
                <td className="text_t2 white">Type: </td>
                <td className="text_t2 white">
                    {appointment.type}
                </td>
            </tr>
            </tbody>
        </table>                
        </div>
        <div className="text_t2 down_5 white text_center">Confirmation notifications?</div>
        <div className="down_five button_container flex_center down_5">
            <button onClick={()=>{Toggle_reminder('YES')}} id="appointment_notification_yes" className="text_t2 right_5 button_t4 white opacity_50 space_right">Yes</button>
            <button onClick={()=>{Toggle_reminder('NO')}} id="appointment_notification_no" className="text_t2 left_5 button_t4 white opacity_50 space_left">No</button>
        </div>
        <div className="down_10">
                <table id="notification_checkbox_container" className="table_t2 display_none visibility_none">
                <tbody className="flex_center">
            <tr className="check_box_text right_10">
                <td className="text_t2 white right_5">
                    Email
                </td>
                <td>
                    <span  onClick={()=>{tickbox('email_box')}} id="email_box_span" className="check_box">
                        <Check_box id={'email_box_mark'}></Check_box>
                    </span>
                    <input className="check_box_input" id="email_box" type={'checkbox'}></input>
                </td>
            </tr>
            <tr className="check_box_text ">
                <td className="text_t2 right_5 white">
                    Text
                </td>
                <td>
                <span onClick={()=>{tickbox('text_box')}} id="text_box_span" className="check_box">
                <Check_box id={'text_box_mark'}></Check_box>
                </span>
                <input className="check_box_input" id="text_box" type={'checkbox'}></input>
                </td>
            </tr>
            </tbody>
        </table>        
            <div className="down_10 flex_center"> 
                               <button className="button_t1 black_background white down_five add_5_bottom">Confirm Appointment</button>
            </div>
        </div>
    </div>)
}