import React from 'react'
import styled from 'styled-components'

const Movies = () => {
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <img src="./images/login-background.jpg" alt="movie" />
                </Wrap>
                <Wrap>
                    <img src="./images/login-background.jpg" alt="movie" />
                </Wrap>
                <Wrap>
                    <img src="./images/login-background.jpg" alt="movie" />
                </Wrap>
                <Wrap>
                    <img src="./images/login-background.jpg" alt="movie" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies
const Container = styled.div``
const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4,minmax(0,1fr));
margin-bottom: 40px;
`
const Wrap = styled.div`
border-radius: 10px;
overflow: hidden;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition-duration: 600ms;
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
&:hover{
    cursor: pointer;
    transform: scale(1.05);
    border: 3px solid rgba(249,249,249,0.8);
}
`