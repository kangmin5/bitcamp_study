import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Layout from '../container/Layout'

export default function Compo3(){

  function alertClicked() {
    alert('Alert창 테스트입니다.');
  }  
  return (
    <Layout>
      <h1>Compo3</h1>
      <div className='compo3all'>
        <div className='compo3frameall'>
          <div className='compo3frameleft'>
            <div className='listgroup'>
              <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                  Bmi
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" >
                  Calc
                </ListGroup.Item>
                <ListGroup.Item action href="#link3" >
                  Grade
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" >
                  Login
                </ListGroup.Item>
                <ListGroup.Item action onClick={alertClicked}>
                  Alert창 테스트
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className='compo3frameright'>right</div>
        </div>
      </div>

    </Layout>
    
  )
  
}