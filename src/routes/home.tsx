import { useEffect } from 'react'
import Card from '../components/Card'
export default function Home(){
    useEffect(()=>{
        fetch('https://api.christopherkufis.com/articles')
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! Status: ${res.status}`)
            }

            return res.json()
        })
        .then((res)=>{
            console.log(res)
        })
    },[])
    return(
        <>
        <Card title='test' subtitle='test'></Card>
        </>
        )
}
