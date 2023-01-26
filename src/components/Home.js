import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import { useDispatch, useSelector } from 'react-redux'
import { moviesAsync } from '../features/movie/movieSlice'
import { onSnapshot, collection } from 'firebase/firestore';
import db from '../firebase'
import { setMovies, setLoading } from '../features/movie/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null);
  // const loading = useSelector(setLoading)
  useEffect(() => {
    onSnapshot(
      collection(db, "movies"),
      (snapshot) => {
        let tempMovies = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        dispatch(setMovies(tempMovies))
      },
      (error) => {
        console.log(error)
      })
    dispatch(moviesAsync())

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