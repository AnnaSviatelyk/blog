import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;

    span {
        height: 40px;
        border-radius: 2px;

        font-size: 16px;
        font-weight: 200;
        color: #333333;
        text-transform: uppercase;
    }

    p {
        margin: 0 0 24px 0;
    }
`;

const ErrorMessage = () => (
    <ErrorContainer>
        <span>Error!</span>
        <p>Ooops, something went wrong! Pease try again later...</p>
    </ErrorContainer>
);

export default ErrorMessage;
