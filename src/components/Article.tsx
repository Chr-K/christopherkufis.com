import { useLoaderData } from "react-router-dom"

export default function Article(){
    const data = useLoaderData()
    console.log(data)
    let content

        content = <div>Nothing to see here</div>
    return(
        <>
        {content}
        </>
    )
}