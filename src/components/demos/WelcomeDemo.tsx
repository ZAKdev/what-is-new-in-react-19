import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
`;

const WelcomeTitle = styled.h2`
  font-size: ${props => props.theme.typography.fontSize.xl};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const WelcomeText = styled.p`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto ${props => props.theme.spacing.lg};
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  text-align: left;
  max-width: 500px;
  margin: 0 auto;
  
  li {
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.text};
  }
`;

const WelcomeDemo: React.FC = () => {
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