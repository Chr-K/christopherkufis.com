import { useLoaderData } from "react-router-dom"
export default function Article(){
    const data = useLoaderData() as Array<Object>
    let content
        if(data.length>0){
            content = data
        }
        else{
            content = <div>Nothing to see here</div>
        }

    return(
        <>
        <div>Nothing to see here</div>
        </>
    )
}