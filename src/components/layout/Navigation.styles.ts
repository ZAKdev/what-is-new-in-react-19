import styled from 'styled-components';

export const NavContainer = styled.nav`
    width: 300px;
    height: 100vh;
    background-color: ${props => props.theme.colors.surface};
    border-right: 1px solid ${props => props.theme.colors.border};
    padding: ${props => props.theme.spacing.lg};
    overflow-y: auto;
`;

export const NavTitle = styled.h1`
    font-size: ${props => props.theme.typography.fontSize.xl};
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.xl};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
`;

export const DemoButton = styled.button<{ isActive: boolean }>`
    display: block;
    width: 100%;
    padding: ${props => props.theme.spacing.sm};
    margin-bottom: ${props => props.theme.spacing.sm};
    text-align: left;
    border-radius: ${props => props.theme.borderRadius.md};
    transition: all 0.2s ease;
    background-color: ${props => props.isActive ? props.theme.colors.primary : 'transparent'};
    color: ${props => props.isActive ? '#ffffff' : props.theme.colors.text};
    
    &:hover {
        background-color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.border};
    }
`;

export const DemoTitle = styled.div`
    font-weight: ${props => props.theme.typography.fontWeight.medium};
    margin-bottom: 4px;
`;

export const DemoDescription = styled.div`
    font-size: ${props => props.theme.typography.fontSize.sm};
    opacity: 0.8;
`;