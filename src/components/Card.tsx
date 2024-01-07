import '../styles/card.css'
import { CardProps } from './Types/CardProps'
import { useNavigate } from 'react-router-dom'

export default function Card(card : CardProps){
    const navigate = useNavigate()
    const date = new Date(card.created)
    const cardDate = (date.getMonth()+1).toString() + "-" + date.getDate() + "-" + date.getFullYear().toString()
    function handleClick(){
        navigate(`/article/${card.ID}`)
    }
    return(
    <div className="card" onClick={handleClick}>
        <p className='card-date'>{cardDate}</p>
        <p className='card-title'> {card.title} </p>
        <p className='card-content'> {card.subtitle} </p>
        <p className='read-link'>Click To Read</p>
    </div>

    
    )
}