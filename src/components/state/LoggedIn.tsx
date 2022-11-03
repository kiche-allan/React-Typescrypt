import { useState } from "react"

export const isLoggedIn =  () => {
   
//create a login state variable
const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <><><button onClick={handleLogin}>Login</button><button onClick={handleLogout}>Logout</button><div>User is Logged In/ Logged Ourt</div></><div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div></>
    )
}