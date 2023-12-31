import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { CardProps } from '../components/CardProps'
import LoadBar from '../components/LoadBar'
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
        content = articles.map((article:CardProps)=>(
            <Card {...article}></Card>
        )
       )
    }
    else{
        content = <LoadBar></LoadBar>
    }
    return(
        <>
        {content}
        </>
        )
}
