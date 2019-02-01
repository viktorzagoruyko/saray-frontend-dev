import React from 'react';

import styled from 'styled-components';

const container = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & h1 {
        font-size: 3rem;
        font-weight: 700;
    }
    
    & h6 {
        font-size: 1rem;
        font-weight: 300;
    }
`;

export default class Home extends React.Component {
    render() {
        return (
            <container>
                <h1>SARAY</h1>
                <h6>PHOTOSTUDIO</h6>
            </container>
        )
    }
}