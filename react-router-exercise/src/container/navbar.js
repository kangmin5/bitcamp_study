import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function navbar(){
  return (
    <div>
        <nav>
            <Ul>
                <Li><Link to="/">Home</Link></Li>
                <Li><Link to="/compo1">Compo1</Link></Li>
                <Li><Link to="/compo2">Compo2</Link></Li>
                <Li><Link to="/compo3">Compo3</Link></Li>
            </Ul>
        </nav>
    </div>
  )
}

const Ul = styled.ul`
text-align: center;
text-decoration: none;
`
const Li = styled.li`
float: 0;
margin-left: 2rem;
display: inline-block;
text-decoration: none;
text-align: center;

`
