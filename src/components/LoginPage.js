import React from 'react'
import styled from 'styled-components'

const LoginPage = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src='images/cta-logo-one.svg'>
                </CTALogoOne>
                <SignUpButton>
                    Get all there
                </SignUpButton>
                <Description>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis illum, fugiat aliquid corporis similique incidunt a et deleniti nisi modi ipsam necessitatibus provident cupiditate iste laudantium facere quo quod quidem.
                </Description>
                <CTALogoTwo src='images/cta-logo-two.png'>
                </CTALogoTwo>
            </CTA>
        </Container>
    )
}

export default LoginPage

const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
justify-content: center;
align-items: center;
&:before{
    background-position: top;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0;
    content: '';
    left: 0;
    right: 0;
    background-image: url('images/login-background.jpg');
    z-index: -1;
}
`
const CTA = styled.div`
max-width: 650px;
width: 70%;
padding: 80px 40px;
display: flex;
flex-direction: column;
`
const CTALogoOne = styled.img``

const SignUpButton = styled.a`
width: 100%;
text-transform: uppercase;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;
&:hover{
    background-color: #0843ee ;
}
`
const Description = styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`
const CTALogoTwo = styled.img`
padding: 0 1rem;
`