import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './../constants/keys';
import styled, { keyframes } from 'styled-components';

const Display = () => {

    const [pageData, setPageData] = useState({});

    useEffect(() => {
        axios
            .get(`${BASE_URL}?api_key=${API_KEY}`)
            .then(res => {
                setPageData(res.data);
                // console.log(res.data);
            })
            .catch(err => {
                console.log(err, "Oops, something went wrong!");
            })
    },[])

    return (
        <section>
            <Wrapper>
                <H1>NASA: Astronomy Photo of the Day</H1>
            </Wrapper>
            <ImageInfo className="image-info">
                <H3>{pageData.title}</H3>
                <Date>{pageData.date}</Date>
                <Img src={pageData.url} alt="Space" />
                <ImgLink href={pageData.hdurl} target="_blank">High Definition Photo</ImgLink>
            </ImageInfo>
            <Description>
                <H4>Explanation</H4>
                <Explanation>{pageData.explanation}</Explanation>
            </Description>
            <Footer>
                <Copyright>&copy;{pageData.copyright}</Copyright>
            </Footer>
        </section>
    )
}

const frame = keyframes`
    100% {
    transform: scale(1.25);
  }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const H1 = styled.h1`
    font-weight: ${pr => pr.theme.fontWeight};
    text-align: center;
    font-size: 2.5rem;
    padding-bottom: 1%;
    padding-top: 3rem;
    margin-bottom: 2.5%;
    width: 50%;
    color: ${pr => pr.theme.secondaryColor};
    border-bottom: 2px solid white;
    animation:${frame} 1.75s ease-in-out forwards;
`;

const ImageInfo = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2%;
`;

const H3 = styled.h3`
    padding-bottom: 1%;
    color: ${pr => pr.theme.secondaryColor};
    font-weight: ${pr => pr.theme.fontWeight};
    font-size: 1.75rem;
`;

const Date = styled.p`
    color: ${pr => pr.theme.white};
    font-weight: ${pr => pr.theme.fontWeight};
    padding-bottom: 1.5%;
    font-size: 1.25rem;
`;

const Img = styled.img`
    width: 70%;
    border-radius: 5%;
`;

const ImgLink = styled.a`
    text-decoration: none;
    color: ${pr => pr.theme.primaryColor};
    background-color: ${pr => pr.theme.secondaryColor};
    border: 2px solid ${pr => pr.theme.white};
    padding: 0.75% 2%;
    margin-top: 1.75%;
    font-weight: ${pr => pr.theme.fontWeight};
    border-radius: 5%;
`;

const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const H4 = styled.h4`
    color: ${pr => pr.theme.secondaryColor};
    font-weight: ${pr => pr.theme.fontWeight};
    font-size: 1.25rem;
    border-bottom: 2px solid white;
    width: 60%;
    text-align: center;
    padding-bottom: 0.75%;
`;

const Explanation = styled.p`
    width: 60%;
    padding: 2% 0;
    line-height: 120%;
    color: ${pr => pr.theme.secondaryColor};
    font-size: 1.15rem;
`;

const Footer = styled.footer`
    display: flex;
    align-items:center;
    justify-content:center;
    padding-bottom: 2%;
`;

const Copyright = styled.p`
    color: ${pr => pr.theme.white};
`;

export default Display;
