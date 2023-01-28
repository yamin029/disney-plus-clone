import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import { useDispatch } from 'react-redux'
import { onSnapshot, collection } from 'firebase/firestore';
import db from '../firebase'
import { setMovies } from '../features/movie/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    onSnapshot(
      collection(db, "movies"),
      (snapshot) => {
        let tempMovies = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        dispatch(setMovies(tempMovies))
      },
      (error) => {
        setError(error)
      })
    setLoading(false)
  },[dispatch]);
  return (
    <Container>
      <ImageSlider></ImageSlider>
      <Viewers></Viewers>
      <Movies error={error} loading={loading}></Movies>
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