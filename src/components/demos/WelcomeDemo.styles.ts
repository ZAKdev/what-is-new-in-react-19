import styled from 'styled-components';

export const WelcomeContainer = styled.div`
    text-align: center;
    padding: ${props => props.theme.spacing.xl};
`;

export const WelcomeTitle = styled.h2`
    font-size: ${props => props.theme.typography.fontSize.xl};
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.lg};
`;

export const WelcomeText = styled.p`
    font-size: ${props => props.theme.typography.fontSize.lg};
    color: ${props => props.theme.colors.textLight};
    max-width: 600px;
    margin: 0 auto ${props => props.theme.spacing.lg};
    line-height: 1.6;
`;

export const FeatureList = styled.ul`
    text-align: left;
    max-width: 500px;
    margin: 0 auto;
    
    li {
        margin-bottom: ${props => props.theme.spacing.sm};
        color: ${props => props.theme.colors.text};
    }
`;