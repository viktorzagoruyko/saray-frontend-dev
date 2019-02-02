import React from 'react';

import styled from 'styled-components';

const Video = styled.video`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: auto;
    width: 650px;
    max-width: 100vw;
`;

const Container = styled.section`
    position: relative;
    overflow: hidden;
    
    width: 100%;
`;

class ResizableSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: '',
        };

        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    handleWindowResize() {
        this.setState({
            height: window.innerHeight + 'px'
        });
    }

    componentWillMount() {
        this.handleWindowResize();
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    render() {
        return <Container style={{height: this.state.height}} {...this.props}>{this.props.children}</Container>
    }
}

const Section = styled(ResizableSection)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class Home extends React.Component {
    render() {
        return (
            <Section>
                <Video loop autoPlay playsInline muted>
                    <source src="http://138.197.142.45:8000/static/background.webm" />
                    <source src="http://138.197.142.45:8000/static/background.mp4" />
                </Video>
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
            </Section>
        )
    }
}