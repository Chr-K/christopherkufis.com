import '../styles/card.css'
import { CardProps } from './Types/CardProps'
import { useNavigate } from 'react-router-dom'

export default function Card(card : CardProps){
    const navigate = useNavigate()
    function handleClick(){
        navigate(`/article/${card.ID}`)
    }
    console.log(card)
    return(
    <div className="card" onClick={handleClick}>
        <p className='card-title'> {card.title} </p>
        <p className='card-content'> {card.content} </p>
        <p>ID={card.ID}</p>
        <p className='read-link'>Click To Read</p>
    </div>

    
    )
}