import { useLoaderData } from "react-router-dom"

export default function Article(){
    const articleData:HTMLElement | null = useLoaderData() as HTMLElement
    console.log(articleData)
    let content
    if(articleData){
        content = articleData
    }
    else{
        content = <div>Nothing to see here</div>
    }
    return(
        <>
                {content}
        </>
    )
}