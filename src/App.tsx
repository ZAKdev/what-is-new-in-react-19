import { JSX, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/layout/Navigation';
import MainContent from './components/layout/MainContent';
import WelcomeDemo from './components/demos/WelcomeDemo';
import DocumentMetaData from './components/demos/DocumentMetaData/DocumentMetaData';
import UseActionState from './components/demos/actions/UseActionState';
import FormActions from './components/demos/actions/FormActions';
import PreinitDemo from './components/demos/others/PreinitDemo';
import LikeComp from './components/demos/OptimisticComp/LikeComp';
import PasswordChange from './components/demos/OptimisticComp/PasswordChange';
import UsersList from './components/demos/useApi/UsersList';
import RefsComp from './components/demos/others/RefsComp';
import DeferredSearch from './components/demos/others/DeferredSearch';
import ReactCompilerDemo from './components/demos/ReactCompiler/ReactCompilerDemo';
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
        id: 'form-actions',
        title: 'Form Actions',
        component: () => <FormActions />,
    },
    {
        id: 'preinit-demo',
        title: 'preinit()',
        component: () => <PreinitDemo />,
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
        id: 'others',
        title: 'refs function',
        component: () => (
            <div>
                <RefsComp />
            </div>
        ),
    },
    {
        id: 'deferred-value',
        title: 'useDeferredValue',
        component: () => (
            <div>
                <DeferredSearch />
            </div>
        ),
    },
    {
        id: 'meta-data',
        title: 'Document Meta Data',
        component: () => <DocumentMetaData title='Hello everyone' />,
    },
    {
        id: 'react-compiler',
        title: 'React Compiler',
        component: () => <ReactCompilerDemo />,
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
