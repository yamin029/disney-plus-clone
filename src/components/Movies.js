import React from 'react'
import styled from 'styled-components'
import { selectMovie } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Movies = ({ error, loading }) => {
    const movies = useSelector(selectMovie);
    return (
        <Container>
            <h3>Recommended for you </h3>
            <Content>
                {loading && (<h1>Loading...</h1>)}
                {error && (<h1>{error}</h1>)}
                {movies && (
                    movies.map((movie) => (
                        <Link to={`detail/${movie.id}`} key={movie.id}>
                            <Wrap >
                                <img src={movie.CardImg} alt="movie" />
                            </Wrap>
                        </Link>
                    ))
                )}
            </Content>
        </Container>
    )
}

export default Movies
const Container = styled.div``
const Content = styled.div`
height: 100%;
display: grid;
grid-gap: 1rem;
grid-template-columns: repeat(6,minmax(0,1fr));
margin-bottom: 40px;
`
const Wrap = styled.div`
height: 100%;
border-radius: 10px;
overflow: hidden;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition-duration: 600ms;
img{
    height: 100%;
    width: 100%;
    object-fit: fill;
}
&:hover{
    cursor: pointer;
    transform: scale(1.05);
    border: 3px solid rgba(249,249,249,0.8);
}
`