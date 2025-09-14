import styled from 'styled-components';

export const DemoContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

export const PerformanceIndicator = styled.div`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    margin: 20px 0;
    font-weight: 500;
    text-align: center;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
`;

export const CompilerIndicator = styled.div`
    background: ${props => props.theme.colors.primary}20;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 6px;
    padding: 10px;
    margin-top: 10px;
    font-size: 14px;
    font-style: italic;
    color: ${props => props.theme.colors.primary};
`;
