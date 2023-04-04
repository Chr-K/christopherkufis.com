import Check_box from "../../../../assets/SVG/checkmark"
export default function Appointment_confirm(){

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
            checkbox_cont!.style.display = 'block'

        }
        else if(value = 'NO')
        {   

            appointment_notification_yes!.style.backgroundColor = 'gray'
            appointment_notification_no!.style.backgroundColor = 'Orange'
            appointment_notification_yes!.style.opacity = '50%'
            appointment_notification_no!.style.opacity = '100%'
            checkbox_cont!.style.display = 'none'
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
            console.log('hi')
            check_1!.style.animationDirection = 'normal'
            check_2!.style.animationDirection = 'normal'   
            check_1!.style.animationName = 'check_mark'
            check_2!.style.animationName = 'check_mark'
            box.checked = true

        }
    }
    return(
    <div>
        <div id="add_phone" className="add_phone">
            <div className="close_button">
            <span onClick={()=>{
                document.getElementById('add_phone')!.style.display = 'none'
            }}>x</span>
            </div>
        <div className="page_title phone_title">Add a phone  number</div>
        <input className="phone_input" placeholder="Phone"></input>
        <div className="button_container down_15">
            <button className="button_t5">Confirm</button>
        </div>
        </div>
        <div className="page_title down_five">
            Confirm Appointment
        </div>
        <div className="appointment_table_container down_five">
        <table className="text_t1 table_t1">
            <tr>
                <td>
                    Date:6/18/26
                </td>
            </tr>
            <tr>
                <td>
                    Time:5:30pm
                </td>
            </tr>
            <tr>
                <td>
                    Type:Interview
                </td>
            </tr>
        </table>

        </div>
        <div className="text_t1 down_five">Would you like to be sent a reminder?</div>
        <div className="down_five button_container">
            <button onClick={()=>{Toggle_reminder('YES')}} id="appointment_notification_yes" className="button_t4 space_right">Yes</button>
            <button onClick={()=>{Toggle_reminder('NO')}} id="appointment_notification_no" className="button_t4 space_left">No</button>
        </div>
        <div className="appointment_table_container">
        <table id="notification_checkbox_container" className="text_t1 table_t2 display_none">
            <tr className="check_box_text">
                <td>
                    Email
                </td>
                <td>
                    <span  onClick={()=>{tickbox('email_box')}} id="email_box_span" className="check_box">
                        <Check_box id={'email_box_mark'}></Check_box>
                    </span>
                    <input id="email_box" type={'checkbox'}></input>
                </td>
            </tr>
            <tr className="check_box_text">
                <td>
                    Text
                </td>
                <td>
                <span onClick={()=>{tickbox('text_box')}} id="text_box_span" className="check_box">
                <Check_box id={'text_box_mark'}></Check_box>
                </span>
                <input id="text_box" type={'checkbox'}></input>
                </td>
            </tr>
            <tr>
                <td>
                <button className="button_t5 down_five"> Confirm Appointment</button>
                </td>
            </tr>
        </table>
            <div>
            </div>
        </div>
    </div>)
}