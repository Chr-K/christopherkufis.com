import  {  createElement, useRef } from 'react'
import './selector.css'
import { apply_animation } from '../../../functions/Animations'
export type options = {
    option:Array<string>
}

    interface props{
        options:options,
        place_holder:string,
        callback:Function,
        id:string,
        idlist:Array<string>,

    }

export default function Selector({options,place_holder,callback,id,idlist}:props){
    const selector_state = useRef(false)
    function selector_toggle(){
        idlist.forEach((value)=>{
            if(value != id && document.getElementById(value)!.style.animationName == 'selector_slide_in'){
                document.getElementById(value)!.style.animationName = 'selector_slide_out'
            }
        })
        if(selector_state.current){
            apply_animation(id,'selector_slide_out')
            selector_state.current = false
        }
        else{
            apply_animation(id,'selector_slide_in')
            document.getElementById(id)!.style.display = 'block'
            selector_state.current = true
        }

    }

    function button_populator(value:string){
        return(
        createElement('button',{className:'selector_option',onClick:()=>{
            callback(value,id + '_value')
            selector_toggle()
        },id:value,key:value},value)
        )
    }
    return(
        <>
        <div  id={id + '_value'} className='selector' onClick={()=>{
            if(options.option[0]== '')
            {

            }
            else{
                selector_toggle()
            }
                }}>
            {place_holder}
        </div>
        <div className='selector_options_container'>
        <div id={id} className='selector_options'>
            {options.option.map(button_populator)}
        </div>
        </div>

    
        </>

    )
}