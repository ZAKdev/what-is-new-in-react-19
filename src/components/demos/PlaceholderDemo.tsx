import React from 'react';
import styled from 'styled-components';

const PlaceholderContainer = styled.div`
  padding: ${props => props.theme.spacing.xl};
  border: 2px dashed ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  background-color: ${props => props.theme.colors.surface};
`;

const PlaceholderTitle = styled.h3`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const PlaceholderText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-style: italic;
`;

const CodeExample = styled.pre`
  text-align: left;
  margin-top: ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
`;

interface PlaceholderDemoProps {
  title: string;
}

const PlaceholderDemo: React.FC<PlaceholderDemoProps> = ({ title }) => {
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