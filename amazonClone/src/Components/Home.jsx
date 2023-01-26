import React from 'react'
import Navbar from './Navbar'



function Home({logout,...props}) {
  return (
    <div className='w-full h-screen' >
        <Navbar logout={logout} className="absolute" />
        <div className="bg-cover bg-[url('https://m.media-amazon.com/images/I/71kv6y8hsyL._SX3000_.jpg')]  pr-6  h-screen ">

       
        {/* <img src='https://m.media-amazon.com/images/I/71kv6y8hsyL._SX3000_.jpg'></img> */}
        
    </div>
    </div>
  )
}

export default Home