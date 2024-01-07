import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { CardProps } from '../components/Types/CardProps'
export default function Home(){
    const [articles,setArticles] = useState([])

    useEffect(()=>{
        fetch('https://api.christopherkufis.com/articles',{
            method:"GET",
            mode:"cors"
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! Status: ${res.status}`)
            }

            return res.json()
        })
        .then((res)=>{
            setArticles(res)
        })
    },[])
    let content
    if(articles.length > 0){
        articles.sort((a:CardProps,b:CardProps)=>{
            const dateA = new Date(a.created)
            const dateB = new Date(b.created)
            return dateA.getTime() - dateB.getTime()
        })
        content = articles.map((article:CardProps)=>(
            <Card {...article}></Card>
        )
       )
    }
    else{
        
        let empty:CardProps = 
        {title:'Hello World',subtitle:'',content:"<p>123</p>",created:'',updated:'',ID:0}

        content = <>
        <Card {...empty}></Card>
        <Card {...empty}></Card>
        <Card {...empty}></Card>
        </>
    }
    return(
        <>
        {content}
        </>
        )
}
