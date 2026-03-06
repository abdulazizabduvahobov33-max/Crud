import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Logout = () => {
    const router = useRouter(

        useEffect(()=> {
            const isAuth = localStorage.getItem("isAuth")
            if (!isAuth){
                router.push("/Product")
            }
        }, [])
    )

 
  return (
    <div>
       
    </div>
  )
}

export default Logout
