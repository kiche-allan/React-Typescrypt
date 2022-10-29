

export const Greet =(props: { name: string 
    messageCount: number
    isLoggedIn: boolean }) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Welcome in {props.name}, Youve got {props.messageCount} an urgent call`: 'Welcome Guest'
                }
                </h2>
        </div>
    )
}