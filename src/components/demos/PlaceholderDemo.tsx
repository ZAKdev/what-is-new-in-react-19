import { JSX } from 'react';
import {
    PlaceholderContainer,
    PlaceholderTitle,
    PlaceholderText,
    CodeExample
} from './PlaceholderDemo.styles';

interface PlaceholderDemoProps {
    title: string;
}

const PlaceholderDemo = ({ title }: PlaceholderDemoProps): JSX.Element => {
    return (
        <PlaceholderContainer>
            <PlaceholderTitle>{title} Demo</PlaceholderTitle>
            <PlaceholderText>
                This is a placeholder for the {title} feature demo. 
                You can implement the actual React 19 feature here.
            </PlaceholderText>
            
            <CodeExample>
                <code>{`// Example: ${title} implementation
import React from 'react';

const ${title.replace(/\s+/g, '')}Demo = () => {
    // Your React 19 ${title.toLowerCase()} implementation here
    return (
        <div>
            <h3>${title} Feature</h3>
            {/* Add your demo content */}
        </div>
    );
};

export default ${title.replace(/\s+/g, '')}Demo;`}</code>
            </CodeExample>
        </PlaceholderContainer>
    );
};

export default PlaceholderDemo;