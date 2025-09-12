import { JSX } from 'react';
import {
    WelcomeContainer,
    WelcomeTitle,
    WelcomeText,
    FeatureList
} from './WelcomeDemo.styles';

const WelcomeDemo = (): JSX.Element => {
    return (
        <WelcomeContainer>
            <WelcomeTitle>Welcome to React 19 Playground</WelcomeTitle>
            <WelcomeText>
                This playground is designed to help you explore and demonstrate the new features in React 19.
                Use the navigation sidebar to explore different feature categories.
            </WelcomeText>
            
            <WelcomeText>Ready-to-explore categories:</WelcomeText>
            <FeatureList>
                <li><strong>Hooks:</strong> New and improved React hooks</li>
                <li><strong>Components:</strong> Enhanced component features</li>
                <li><strong>Server:</strong> Server-side rendering improvements</li>
                <li><strong>Performance:</strong> Performance optimizations</li>
                <li><strong>Other:</strong> Additional React 19 features</li>
            </FeatureList>
        </WelcomeContainer>
    );
};

export default WelcomeDemo;