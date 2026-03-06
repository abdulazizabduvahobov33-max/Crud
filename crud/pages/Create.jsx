import React, { useState } from 'react'
import Navbar from '@/Components/Navbar'
import axios from 'axios'
import { useRouter } from 'next/router'

const Create = () => {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const router = useRouter()

  const addProduct = () => {

    const newProduct = {
      title,
      price
    }

    axios.post("https://69972d897d17864365768d70.mockapi.io/Mahsulot", newProduct)
      .then(() => {
        router.push("/Product")
      })
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-100 to-teal-200">

      <Navbar />

      <div className="flex justify-center items-center pt-32">

        <div className="bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-[380px] flex flex-col gap-5">

          <h2 className="text-3xl font-bold text-center text-black" >
            Add Product
          </h2>

          <input type="text" placeholder="Product title" value={title} onChange={(e)=>setTitle(e.target.value)} className="border text-black border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input type="text" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} className="border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
          />

          <button onClick={addProduct} className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl hover:scale-105 transition text-black"
          >
            Add Product
          </button>

        </div>

      </div>

    </div>
  )
}

export default Create