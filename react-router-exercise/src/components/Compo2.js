import React from 'react'
import Layout from '../container/Layout'

export default function Compo2(){
  return (
    <Layout>
      <h1>Compo2</h1>
      <div className='container'>
        <div id='homebox'>
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
    </Layout>
  )
}