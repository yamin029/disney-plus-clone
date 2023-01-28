import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { doc, getDoc} from "firebase/firestore";
import db from '../firebase'


const Detail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null);
    // const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getDocById = async () => {
            try {
                setLoading(true);
                const ref = doc(db, 'movies', id)
                const docSnap = await getDoc(ref)
                setMovie(docSnap.data())
                setLoading(false);
            } catch (error) {
                // setError(error);
                setLoading(false);
            }
        }
        getDocById()
    }, [id])
    return (
        <Container>
            {loading ? <h1>Loading....</h1> :
                <div>
                    <Background>
                        <img src={movie.BackgroundImg} alt="" />
                    </Background>
                    <ImageTitle>
                        <img src={movie.TitleImg} alt="movie" />
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt="play_button" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt="tailer_button" />
                            <span>TRAILER</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupButton>
                            <img src="/images/group-icon.png" alt="" />
                        </GroupButton>
                    </Controls>
                    <SubTitle>
                        {movie.Genres}
                    </SubTitle>
                    <Description>
                        {movie.Description}
                    </Description>
                </div>
            }
        </Container>
    )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding:calc(3.5vw + 5px);
width: 100%;
position: relative;
`
const Background = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
opacity: 0.8;
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
`
const ImageTitle = styled.div`
height: auto;
width: 40vw;
min-height: 170px;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    color: white;
    filter: opacity(0.5) drop-shadow(0 0 0 blue);
}
`
const Controls = styled.div`
display: flex;
align-items: center;
`
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 48px;
background-color: rgb(249,249,249);
border: none;
padding: 0 1.5rem;
margin-right: 22px;
letter-spacing: 1.8px;
cursor: pointer;
&:hover{
    background: rgb( 198, 198, 198);
}
`

const TrailerButton = styled(PlayButton)`
    background: rgba( 0, 0, 0, 0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    text-transform: uppercase;
`

const AddButton = styled.button`
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgb(0,0,0,0.6);
cursor: pointer;
margin-right: 16px;
span{
    font-size: 30px;
    color: white;
}
`

const GroupButton = styled(AddButton)`
background-color: rgb(0,0,0);
`

const SubTitle = styled.div`
color: rgb(249, 249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249, 249,249);
max-width: 50%;
`