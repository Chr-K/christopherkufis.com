import '../styles/card.css'
import { CardProps } from './CardProps'

export default function Card(card : CardProps){
    return(
    <div className="card">
        <p className='card-title'> {card.title} </p>
        <p className='card-content'> {card.content} </p>
        <p className='read-link'>Click To Read</p>
    </div>
    
    )
}