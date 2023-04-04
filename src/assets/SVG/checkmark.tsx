import './SVG_Styles/checkmark.css'
export type check_mark_id = {
id:string
}
export default function Check_mark({id}:check_mark_id){
    return(
      <svg id={id} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 35">
        <line className='checkmark check1' x1="3" y1="28.38" x2="32.79" y2="60.01"/>
        <line className='checkmark check2' x1="32.79" y1="59.9" x2="72.63" y2="3"/>
      </svg>
    )
}