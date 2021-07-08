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
            <H1>Nasa Photo of the Day</H1>
            <div className="image-info">
                <h3>{pageData.title}</h3>
                <p>{pageData.date}</p>
                <img src={pageData.url} alt="Space" />
                <a href={pageData.hdurl}>HD Photo</a>
            </div>
            <div className="description">
                <h4>Explanation</h4>
                <p>{pageData.explanation}</p>
            </div>
            <footer>
                <p>&copy;{pageData.copyright}</p>
            </footer>
        </section>
    )
}

const kf = keyframes`
    100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const frame = keyframes`
    100% {
    transform: scale(1.25);
  }
`;

const H1 = styled.h1`
    font-weight: ${pr => pr.theme.fontWeight};
    text-align: center;
    font-size: 2.5rem;
    padding: 2% 0;
    color: ${pr => pr.theme.secondaryColor};
`;

export default Display;
