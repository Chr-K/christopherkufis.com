import './root.css'
import '../assets/SVG/Animations.css'
import {Drop_down,Profile_icon} from '../assets/SVG/SVG_bucket'
import { Link,Outlet } from 'react-router-dom'
import { apply_animation } from '../functions/Animations'
import { useState } from 'react'
import User_Provider from '../Context'
function Root() {
  
  const [Drop_down_toggle,setDrop_down_toggle] = useState<boolean>(false)



  return (
    <User_Provider>
        <div className="app">
      <div className="header">
        <div></div>
        <div className='drop_down_container' onClick={()=>{
          drop_down()
        }}>
      <Drop_down></Drop_down>
        </div>
      <Link to={'/'}><span className='header_title' onClick={()=>{close_drop_down()}}>Christopher Kufis</span></Link>
        <div className='profile_icon_container'>
        <Link to={'/Login'} onClick={()=>{close_drop_down()}}><Profile_icon></Profile_icon></Link>
        </div>

      <div id='drop_down_menu' className='drop_down_menu text_t1'>
      </div>
      </div>
      <div className='page_container'>
        <Outlet></Outlet>
      </div>
    </div>      
    </User_Provider>


  )
  function drop_down(){
    var menu = document.getElementById('drop_down_menu')
    if(Drop_down_toggle == false){
          apply_animation('top_line','top_line_forward')
          apply_animation('bottom_line','bottom_line_forward')
          setDrop_down_toggle(true)
          menu!.style.display = 'block'
          menu!.style.animationName = 'menu_slide_in'
    }
    else if(Drop_down_toggle == true){
      apply_animation('top_line','top_line_backward')
      apply_animation('bottom_line','bottom_line_backward')
      setDrop_down_toggle(false)
      menu!.style.animationName = 'menu_slide_out'
      const timer = setTimeout(() => {
        if(Drop_down_toggle !== true){
        menu!.style.display = 'none'
        }
        clearTimeout(timer)
      }, 750);
    }

}
function close_drop_down(){
  var menu = document.getElementById('drop_down_menu')
  if(Drop_down_toggle == true){
    apply_animation('top_line','top_line_backward')
    apply_animation('bottom_line','bottom_line_backward')
    setDrop_down_toggle(false)
    menu!.style.animationName = 'menu_slide_out'
    const timer = setTimeout(() => {
      if(Drop_down_toggle !== true){
      menu!.style.display = 'none'
      }
      clearTimeout(timer)
    }, 750);
  }
}
}

export default Root