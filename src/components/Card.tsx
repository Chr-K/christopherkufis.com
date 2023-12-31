import '../styles/card.css'
import { CardProps } from './CardProps'

export default function Card(card : CardProps){
    return(
    <div className="card">
        <h1>{card.title}</h1>
        <h2>{card.subtitle}</h2>
    </div>
    
    )
}