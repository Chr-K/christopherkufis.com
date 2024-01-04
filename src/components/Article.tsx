import { useLoaderData } from "react-router-dom"
import { CardProps } from "./Types/CardProps"
import { useEffect } from "react"
const data = useLoaderData() as Array<CardProps>

export default function Article(){
    console.log(data)
        return(
            <div dangerouslySetInnerHTML={{__html: data[0].content}}></div>
            )
}
