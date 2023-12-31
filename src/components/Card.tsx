import '../styles/card.css'
import { CardProps } from './CardProps'

export default function Card(card : CardProps){
    const {title,subtitle,content,created,updated} = card
    console.log(content + created + updated)
    return(
      
    <div className="card">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
    
    )
}