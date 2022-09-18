
import React from 'react'
import styled from 'styled-components'


const Container =styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display:flex;
    align-items: center;
    justify-content:center;
    font-size: 14px;
    font-weight: 500;  
`


const Offer = () => {
    return (
    <Container>
        Super Deal! Free Shipping on Orders over 500 L.E
    </Container>
    ) 
}

export default Offer