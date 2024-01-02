import { useLoaderData } from "react-router-dom"
import { CardProps } from "./Types/CardProps"
export default function Article(){
    const data = useLoaderData() as Array<CardProps>

        return(
            JSON.parse(JSON.stringify(data))
        )
}
