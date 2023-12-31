import { useEffect, useState } from 'react'
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
    content = <div>nothing to see here</div>
    console.log(articles)
    return(
        <>
        {content}
        </>
        )
}
