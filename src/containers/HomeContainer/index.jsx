import React from 'react';

import { Section, Video, Logo } from './style';

export default function HomeContainer() {
    return(
        <Section>
            <Video loop autoPlay playsInline muted>
                <source src="https://drive.google.com/uc?export=download&id=1cEWVcpz-mKXKHdXVZ02meVaGPr1_2OCm" type='video/webm' />
                <source src="https://drive.google.com/uc?export=download&id=1M2EJfkdVicu72qww8SbJTx1d82PrdLJG" type='video/mp4' />
            </Video>

            <Logo>
                <span>Saray</span>
                <br />
                <span>PhotoStudio</span>
            </Logo>
        </Section>
    )
}