import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}){
  return (
    <div >
    <Header/>
    <div className='container'>
    {children}
    </div>
    <Footer/>
    </div>
  )
}


