import styled from 'styled-components';

import ResizableSection, { media } from '../../style/styled';

export const Section = styled(ResizableSection)`
    position: relative;

    padding-left: 30px;
    padding-right: 30px;

    display: flex;
    align-items: center;
    
    ${ media.landscape`
        padding-left: 50px;
        padding-right: 50px;
    `}

    ${ media.desktop`
        padding-left: 75px;
        padding-right: 75px;
    `}
`;

export const Video = styled.video`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    margin: auto;
    height: 100%;
    width: auto;
`;

export const Logo = styled.h1`
    text-transform: uppercase;

    & span {
        color: #FDFDFD;
    }

    & span:nth-child(1) {
        font-size: 3rem;
        font-weight: 700;
    }

    & span:nth-child(3) {
        font-size: 2.5rem;
        font-weight: 200;
    }

    ${ media.landscape`
        & span:nth-child(1) {
           font-size: 6rem;
        }

        & span:nth-child(3) {
           font-size: 4rem;
        }
    `}

    ${ media.desktop`
        & span:nth-child(1) {
           font-size: 7rem;
        }

        & span:nth-child(3) {
           font-size: 5rem;
        }
    `}
`;