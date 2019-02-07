import React from 'react';

import { Section, Video, Logo } from './style';

export default function HomeContainer() {
    return(
        <Section>
            <Video loop autoPlay playsInline muted>
                <source src="http://138.197.142.45:8000/static/background.webm" />
                <source src="http://138.197.142.45:8000/static/background.mp4" />
            </Video>

            <Logo>
                <span>Saray</span>
                <br />
                <span>PhotoStudio</span>
            </Logo>
        </Section>
    )
}