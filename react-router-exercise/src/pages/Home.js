import '../App.css'
import React from 'react'
import Header from '../container/Header'

export default function Home(){
  return(
    <div >
      <Header/>
        <div className='container-fluid headerback '>
          <div className='mainletter'>
            <h2>KDT5</h2>
            <p>열심히 공부합시다. ㅋㅋ</p>
          </div>
          <div className='background'>
          </div>
        <div className='container'>
          <h3>여기가 홈입니다.</h3>

        </div>
        </div>
    </div>
  )
}


