import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({}  as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'John',
            email: 'allankiche18@gmail.com'
        })
    }
    // const handleLogout = () => {
    //     setUser(AuthUser)
    // }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User name is {user.name}</div>
            <div>User email is {user.name}</div>
        </div>
    )
}