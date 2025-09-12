import { JSX } from 'react';
import { NavigationProps } from '../../types';
import {
    NavContainer,
    NavTitle,
    DemoButton,
    DemoTitle
} from './Navigation.styles';

const Navigation = ({ demos, activeDemo, onDemoSelect }: NavigationProps): JSX.Element => {
    return (
        <NavContainer>
            <NavTitle>React 19 Playground</NavTitle>
            {demos.map((demo) => (
                <DemoButton
                    key={demo.id}
                    isActive={activeDemo === demo.id}
                    onClick={() => onDemoSelect(demo.id)}
                >
                    <DemoTitle>{demo.title}</DemoTitle>
                </DemoButton>
            ))}
        </NavContainer>
    );
};

export default Navigation;