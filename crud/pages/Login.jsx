import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Login = () => {

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const router = useRouter()

    const handleLogin = (e)=>{
        e.preventDefault()

        if(name === "Admin" && password === "1234"){
            localStorage.setItem("isAuth",true)
            router.push("/Create")
        }else{
            alert("Wrong login")
        }
    }

  return (

    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-200 via-emerald-100 to-teal-200">

      <form onSubmit={handleLogin} className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl flex flex-col gap-5 w-[350px]"
      >

        <h2 className="text-3xl text-black  font-bold text-center">
          Login
        </h2>

        <input type="text"   placeholder="Username" onChange={(e)=>setName(e.target.value)} className="border p-3 rounded-xl text-black"
        />

        <input type="password"  placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} className="border p-3 rounded-xl text-black"
        />

        <button type="submit" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl hover:scale-105 transition"
        >
          Login
        </button>

      </form>

    </div>
  )
}

export default Login