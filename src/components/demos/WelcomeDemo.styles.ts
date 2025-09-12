import styled from 'styled-components';

export const WelcomeContainer = styled.div`
    text-align: center;
    padding: ${props => props.theme.spacing.xl};
`;

export const WelcomeTitle = styled.h1`
    font-size: ${props => props.theme.typography.fontSize.xl};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text};
    margin-bottom: ${props => props.theme.spacing.lg};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    
    .react-highlight {
        color: ${props => props.theme.colors.react};
    }
`;

export const WelcomeText = styled.p`
    font-size: ${props => props.theme.typography.fontSize.lg};
    color: ${props => props.theme.colors.textLight};
    max-width: 700px;
    margin: 0 auto ${props => props.theme.spacing.lg};
    line-height: 1.6;
`;

export const WelcomeSubtitle = styled.h2`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.accent};
    margin: ${props => props.theme.spacing.xl} 0 ${props => props.theme.spacing.lg};
    font-weight: ${props => props.theme.typography.fontWeight.semiBold};
`;

export const FeatureList = styled.ul`
    text-align: left;
    max-width: 600px;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    
    li {
        margin-bottom: ${props => props.theme.spacing.md};
        color: ${props => props.theme.colors.text};
        padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
        border-left: 3px solid ${props => props.theme.colors.react};
        background: ${props => props.theme.colors.surface};
        border-radius: ${props => props.theme.borderRadius.sm};
        
        strong {
            color: ${props => props.theme.colors.accent};
        }
    }
`;