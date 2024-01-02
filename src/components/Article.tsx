import { useLoaderData } from "react-router-dom"
import { CardProps } from "./Types/CardProps"

export default function Article(){
    const data = useLoaderData() as Array<CardProps>
    console.log(data)
        return(
            <div dangerouslySetInnerHTML={{__html: data[0].content}}></div>
            )
}
