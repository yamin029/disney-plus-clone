import React, { useEffect } from 'react'
import styled from 'styled-components'
import { SelectUserName, SelectUserPhoto } from '../features/user/userSlice'
import { useSelector } from 'react-redux'
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { setUserLogin, setSignOut } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';



const Header = () => {
  const userName = useSelector(SelectUserName)
  const userPhoto = useSelector(SelectUserPhoto)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // console.log(user)
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

  })

  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(setSignOut())
      navigate('/login')
    }).catch((error) => {
      // An error happened.
    });
  }

  const signIn = () => {
    navigate('/login')
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        dispatch(setUserLogin({ name: user.displayName, email: user.email, photo: user.photoURL }))
        navigate('/')
        // ...
      }).catch((error) => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <Nav>
      <Link to='/'>
        <Logo src='/images/logo.svg'></Logo>
      </Link>
      {!userName ? <Login onClick={() => signIn()}>Login</Login> : (<>
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
        <UserImage src={userPhoto} alt="home" onClick={() => signOutUser()} />

      </>)}
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
justify-content: space-between;
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

const Login = styled.div`
border: 1px solid;
font-size: 1rem;
padding: .5rem 1rem;
border-radius: 0.3rem;
letter-spacing: 1.5px;
text-transform: uppercase;
background-color: rgba(0,0,0,0.6);
transition: all 0.4s;
&:hover{
  background: #f9f9f9;
  color: black;
  font-weight: bold;
  border-color: transparent;
  cursor: pointer;
}
`