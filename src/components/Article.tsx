import { useLoaderData } from "react-router-dom"
export default function Article(){
    const data = useLoaderData() as Array<Object>
        if(data.length>0){
            console.log(data[0])
        }

    return(
        <>
        <div>Nothing to see here</div>
        </>
    )
}