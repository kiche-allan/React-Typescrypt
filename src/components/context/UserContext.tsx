import { Children, createContext, useState } from "react";

export type AuthUser = {
    name: string
    email: string
}

type UserContextType = {
    user: AuthUser | null
    setUser: any
}
type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null)
export const UserContextProvider = ({children} : UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)

    return (
    <UserContext.Provider value ={{user, setUser}}>{children}</UserContext.Provider>
    )
}