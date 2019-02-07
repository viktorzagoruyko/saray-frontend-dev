import styled from 'styled-components';

import ResizableSection, { media } from '../../style/styled';

export const SectionMobile = styled(ResizableSection)`
    display: flex;
    justify-content: center;
    align-items: center;

    ${ media.landscape`
        display: none;
    `}
`;

export const VideoMobile = styled.video`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: auto;
    width: 650px;
    max-width: 100vw;

    ${ media.landscape`
        display: none;
    `}
`;

export const SectionDesktop = styled.section`
    ${ media.landscape`
        position: relative;

        padding-left: 50px;
        padding-right: 50px;
        height: 100vh;
        background-color: #FDFDFD;

        display: flex;
        
        align-items: center;
    `}
`;

export const VideoDesktop = styled.video`
    ${ media.landscape`
        position: absolute;
        top: 0;
        left: 0;

        width: auto;
        height: 100%;
    `}
`;

export const Logo = styled.div`
    ${ media.landscape`
        z-index: 1;
    `}
`;

export const Text = styled.h1`
    ${ media.landscape`
        & span {
            color: #FDFDFD;
            
            opacity: 1;
        }

        & span:nth-child(1) {
            font-size: 6rem;
            font-weight: 700;
        }

        & span:nth-child(3) {
            font-size: 4rem;
            font-weight: 200;
        }
    `}
`;