import { ReactNode } from "react";

export interface CardProps{
    title:string,
    subtitle:string,
    content:ReactNode,
    created:string,
    updated:string,
    ID:number,
    }