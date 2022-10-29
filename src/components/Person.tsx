type PersonProp ={
    name: {
        first: string
        last: string
    }
}
export const Person = (props: PersonProp) => {
    return (
        <div>
            <h2>{props.name.first}{props.name.last}</h2>
        </div>
    )
}