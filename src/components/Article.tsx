import { useLoaderData } from "react-router-dom"
import { CardProps } from "./Types/CardProps"
export default function Article(){
    const data = useLoaderData() as Array<CardProps>
        if(data.length>0){
            console.log(data[0].content)
        }

    return(
        <>
        <div>Nothing to see here</div>
        </>
    )
}