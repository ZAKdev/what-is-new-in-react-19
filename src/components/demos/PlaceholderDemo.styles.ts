import styled from 'styled-components';

export const PlaceholderContainer = styled.div`
    padding: ${props => props.theme.spacing.xl};
    border: 2px dashed ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.lg};
    text-align: center;
    background-color: ${props => props.theme.colors.surface};
`;

export const PlaceholderTitle = styled.h3`
    color: ${props => props.theme.colors.textLight};
    margin-bottom: ${props => props.theme.spacing.md};
`;

export const PlaceholderText = styled.p`
    color: ${props => props.theme.colors.textLight};
    font-style: italic;
`;

export const CodeExample = styled.pre`
    text-align: left;
    margin-top: ${props => props.theme.spacing.lg};
    background-color: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.border};
`;