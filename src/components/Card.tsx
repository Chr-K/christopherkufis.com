import '../styles/card.css'
export default function Card({title,subtitle} : {title:string,subtitle:string}){
    return(
    <>  
    <div className="card">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
    </>
    )
}