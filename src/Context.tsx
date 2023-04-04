import { SetStateAction,Dispatch, createContext, useState,ReactNode } from "react"

export type User = {
    logged_in:boolean,
    email?:string | null,
    phone?:number | null,
}

export interface UserContextInterface{
    user:User,
    setUser:Dispatch<SetStateAction<User>>
}

const defaultState = {
    user: {
        logged_in:false,
        
    },
    setUser: (user:User) =>{}
} as UserContextInterface


export const UserContext = createContext(defaultState)

type User_Provide_props = {
    children: ReactNode
}

export default function User_Provider({children} : User_Provide_props){
    const [user,setUser] = useState<User>({
        logged_in:false,
        phone:null,
        email:null,
    })

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}