import styled from 'styled-components';

export const DocumentContainer = styled.div`
    padding: ${props => props.theme.spacing.lg};
`;

export const DocumentTitle = styled.h2`
    font-size: ${props => props.theme.typography.fontSize.xl};
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.lg};
`;

export const DocumentContent = styled.div`
    margin-bottom: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.text};
`;