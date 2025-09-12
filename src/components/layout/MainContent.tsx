import { JSX, ReactNode } from 'react';
import {
    ContentContainer,
    ContentHeader,
    ContentTitle,
    DemoArea
} from './MainContent.styles';

interface MainContentProps {
    title: string;
    children: ReactNode;
}

const MainContent = ({ title, children }: MainContentProps): JSX.Element => {
    return (
        <ContentContainer>
            <ContentHeader>
                <ContentTitle>{title}</ContentTitle>
            </ContentHeader>
            
            <DemoArea>
                {children}
            </DemoArea>
        </ContentContainer>
    );
};

export default MainContent;