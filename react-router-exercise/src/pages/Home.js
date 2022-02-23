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
            <h6><b> 비트캠프 </b></h6>
            <h6>2022년 1월 24일 ~ 8월 2일</h6>
            <h6> 박 정관 강사</h6>
            <h6> 홍 정명 반장</h6>
          </div>
          <div className='background'>
          </div>
        <div className='container'>
        <div id='homebox'>
        <h3 className='mt-3'>We are...</h3>
          <div className='homebox'>
            <div className='homebox1'>
              <div className='box1'>
                <h4>Students</h4>
              </div>
            </div>
            <div className='homebox1'>              
              <div className='box2'>
              <h4>Projects</h4>
              </div>
            </div>
            <div className='homebox1'>
              <div className='box3'>
              <h4>Study</h4>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}


