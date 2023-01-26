import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
      <a href="/">
        <Logo src='/images/logo.svg'></Logo>
      </a>
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a href="/">
          <img src="/images/search-icon.svg" alt="home" />
          <span>SEARCH</span>
        </a>
        <a href="/">
          <img src="/images/watchlist-icon.svg" alt="home" />
          <span>WATECHLIST</span>
        </a>
        <a href="/">
          <img src="/images/original-icon.svg" alt="home" />
          <span>ORIGINAL</span>
        </a>
        <a href="/">
          <img src="/images/movie-icon.svg" alt="home" />
          <span>MOVIES</span>
        </a>
        <a href="/">
          <img src="/images/series-icon.svg" alt="home" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImage src="/images/rmbg-yamin.png" alt="home" />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
overflow-x: hidden;
height:70px;
background: #090b13;
display: flex;
align-items: center;
justify-content: center;
padding: 0 36px;
`
const Logo = styled.img`
width: 80px;
cursor: pointer;
`
const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 25px;
align-items: center;
justify-content: center;
a{
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  padding: 0 12px;
  cursor: pointer;
  img{
    height: 20px;
  }
  span{
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;
    &::after{
    height: 2px;
    content: '';
    background: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    opacity: 1;
    transform: scaleX(0);
    transform-origin: center;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, .94) 0s;
  }
  }
  &:hover{
    span:after{
      transform: scaleX(1);
    }
  }
}
`
const UserImage = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
cursor: pointer;
position: relative;
display: block;
&:hover{
  border: 1px solid white;
}
`