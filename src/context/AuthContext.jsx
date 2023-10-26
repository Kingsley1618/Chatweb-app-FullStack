"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useContext,createContext } from "react";
import { useRouter } from "next/navigation";
const AuthContext = createContext()
export function AuthProvider({children}) {
    const router = useRouter()
   
    const { isLoaded, isSignedIn, user } = useUser();
useEffect(()=> {
if(!isSignedIn || !user) {
router.push("/sign-in")
} else {
    router.push("/")
}
},[])

return <AuthContext.Provider>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext)
}