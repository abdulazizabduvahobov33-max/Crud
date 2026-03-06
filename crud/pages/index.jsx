 import React from 'react'
 import Navbar from '@/Components/Navbar'
 import { useRouter } from 'next/router'
 
 const index = () => {
  const router = useRouter()
   return (
     <div>
       <Navbar />
       
        
     </div>
   )
 }
 
 export default index
 