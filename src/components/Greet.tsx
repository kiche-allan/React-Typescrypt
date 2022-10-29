import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

export const Greet =(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    return (
        <div>
            <h2>Welcome in {props.name}, Youve got an urgent call</h2>
        </div>
    )
}