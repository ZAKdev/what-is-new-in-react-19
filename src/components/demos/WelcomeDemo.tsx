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
            <WelcomeTitle>
                <span className="react-highlight">React 19</span> Playground
            </WelcomeTitle>
            <WelcomeText>
                Explore React 19 features using the sidebar navigation.
            </WelcomeText>
            
            <FeatureList>
                <li>Actions & Form handling</li>
                <li>useOptimistic hook</li>
                <li>use() hook with promises</li>
                <li>React Compiler</li>
                <li>Refs & Deferred values</li>
                <li>Document metadata</li>
            </FeatureList>
        </WelcomeContainer>
    );
};

export default WelcomeDemo;