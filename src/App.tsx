import { JSX, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/layout/Navigation';
import MainContent from './components/layout/MainContent';
import WelcomeDemo from './components/demos/WelcomeDemo';
import DocumentMetaData from './components/demos/DocumentMetaData/DocumentMetaData';
import UseActionState from './components/demos/actions/UseActionState';
import LikeComp from './components/demos/OptimisticComp/LikeComp';
import PasswordChange from './components/demos/OptimisticComp/PasswordChange';
import UsersList from './components/demos/useApi/UsersList';
import UseContext from './components/demos/useApi/UseContext';
import { DemoItem } from './types';
import { AppContainer } from './App.styles';

const demoItems: DemoItem[] = [
    {
        id: 'welcome',
        title: 'Welcome',
        component: WelcomeDemo,
    },
    {
        id: 'action-state',
        title: 'useActionState',
        component: () => <UseActionState />,
    },
    {
        id: 'optimistic-comp',
        title: 'useOptimistic',
        component: () => (
            <div>
                <LikeComp />
                <PasswordChange />
            </div>
        ),
    },
    {
        id: 'use-api-1',
        title: 'use - withPromise',
        component: () => (
            <div>
                <UsersList />
            </div>
        ),
    },
    {
        id: 'meta-data',
        title: 'Document Meta Data',
        component: () => <DocumentMetaData title='Hello everyone' />,
    },
];

const App = (): JSX.Element => {
    const [activeDemo, setActiveDemo] = useState<string>('welcome');

    const currentDemo = demoItems.find(demo => demo.id === activeDemo) || demoItems[0];
    const CurrentComponent = currentDemo.component;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AppContainer>
                <Navigation
                    demos={demoItems}
                    activeDemo={activeDemo}
                    onDemoSelect={setActiveDemo}
                />
                <MainContent
                    title={currentDemo.title}
                >
                    <CurrentComponent />
                </MainContent>
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
