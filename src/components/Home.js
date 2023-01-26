import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import { useDispatch } from 'react-redux'
import { moviesAsync } from '../features/movie/movieSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(moviesAsync())
    setTimeout(()=>{},2000)
  });
  return (
    <Container>
      <ImageSlider></ImageSlider>
      <Viewers></Viewers>
      <Movies></Movies>
    </Container>
  )
}

export default Home
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before{
    background: url('./images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`