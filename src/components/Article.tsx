import { useLoaderData } from "react-router-dom"
import { CardProps } from "./Types/CardProps"
export default function Article(){
    const data = useLoaderData() as Array<CardProps>
    const articleContent = document.getElementById('article-content')

        if(data.length>0){
            console.log(data[0].content)
            if(articleContent){
                articleContent.innerHTML = data[0].content
            }    
        }

        return(
        <div id="article-content"></div>
        )
}