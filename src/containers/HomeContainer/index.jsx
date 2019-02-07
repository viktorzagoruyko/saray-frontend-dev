import React from 'react';

import { SectionMobile, VideoMobile, SectionDesktop, VideoDesktop, Logo, Text } from './style';

export default function HomeContainer() {
    return(
        <>
            <SectionMobile>
                <VideoMobile loop autoPlay playsInline muted>
                    <source src="http://138.197.142.45:8000/static/background.webm" />
                    <source src="http://138.197.142.45:8000/static/background.mp4" />
                </VideoMobile>

                <svg width={'100%'} height={'100%'} viewBox={'0 0 325 140'} preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id={'overlay'}>
                            <rect width={'100%'} height={'100%'} fill={'#FDFDFD'} />
                            <text x={'50%'} y={'50%'} fontSize={'20px'} fontWeight={'700'} fontFamily={'Roboto, sans-serif'} textAnchor={'middle'}>SARAY</text>
                            <text x={'50%'} y={'56%'} fontSize={'9px'} fontWeight={'200'} fontFamily={'Roboto, sans-serif'} textAnchor={'middle'}>PHOTO STUDIO</text>
                        </mask>
                    </defs>
                    <rect width={'100%'} height={'100%'} fill={'#FDFDFD'} mask={'url(#overlay)'} />
                </svg>
            </SectionMobile>
            <SectionDesktop>
                <VideoDesktop loop autoPlay playsInline muted>
                    <source src="http://138.197.142.45:8000/static/background.webm" />
                    <source src="http://138.197.142.45:8000/static/background.mp4" />
                </VideoDesktop>
                <Logo>
                    <Text>
                        <span>SARAY</span><br /><span>PHOTOSTUDIO</span>
                    </Text>
                </Logo>
            </SectionDesktop>
        </>
    )
}