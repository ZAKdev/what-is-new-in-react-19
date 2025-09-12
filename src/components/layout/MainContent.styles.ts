import styled from 'styled-components';

export const ContentContainer = styled.main`
    flex: 1;
    padding: ${props => props.theme.spacing.xl};
    overflow-y: auto;
    background-color: ${props => props.theme.colors.background};
`;

export const ContentHeader = styled.div`
    margin-bottom: ${props => props.theme.spacing.xl};
    border-bottom: 1px solid ${props => props.theme.colors.border};
    padding-bottom: ${props => props.theme.spacing.lg};
`;

export const ContentTitle = styled.h1`
    font-size: ${props => props.theme.typography.fontSize.xxl};
    color: ${props => props.theme.colors.text};
    margin-bottom: ${props => props.theme.spacing.md};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
`;

export const ContentDescription = styled.p`
    color: ${props => props.theme.colors.textLight};
    font-size: ${props => props.theme.typography.fontSize.lg};
    line-height: 1.6;
`;

export const DemoArea = styled.div`
    background-color: ${props => props.theme.colors.background};
    border-radius: ${props => props.theme.borderRadius.lg};
    padding: ${props => props.theme.spacing.xl};
`;