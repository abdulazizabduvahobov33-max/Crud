import React, { useEffect, useState } from 'react'
import Navbar from '@/Components/Navbar'
import axios from 'axios'

const Product = () => {

    const [data, SetData] = useState([])

    useEffect(() => {
        axios.get("https://69972d897d17864365768d70.mockapi.io/Mahsulot")
        .then((r) => SetData(r.data))
    }, [])

    const deletePrd = (id) => {
        axios.delete(`https://69972d897d17864365768d70.mockapi.io/Mahsulot/${id}`)
        .then(() => {
            SetData(data.filter((x) => x.id !== id))
        })
    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-100 to-teal-200">

            <Navbar />

            <div className="pt-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">

                {data.map((x) => (

                    <div  key={x.id} className="bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl rounded-3xl p-6 flex flex-col items-center hover:scale-110 hover:shadow-2xl transition duration-500"
                    >

 

                        <h2 className="text-xl font-bold">
                                {x.title}
                        </h2>

                        <p className="text-green-600 text-lg font-semibold">
                            ${x.price}
                        </p>

                        <button onClick={() => deletePrd(x.id)} className="mt-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-xl hover:scale-110 transition">
                            Delete
                        </button>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default Product