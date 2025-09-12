import { JSX, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/layout/Navigation';
import MainContent from './components/layout/MainContent';
import WelcomeDemo from './components/demos/WelcomeDemo';
import PlaceholderDemo from './components/demos/PlaceholderDemo';
import DocumentMetaData from './components/demos/DocumentMetaData';
import { DemoItem } from './types';
import { AppContainer } from './App.styles';

const demoItems: DemoItem[] = [
    {
        id: 'welcome',
        title: 'Welcome',
        component: WelcomeDemo,
    },
    {
        id: 'meta-data',
        title: 'Document Meta Data',
        component: () => <DocumentMetaData title='Hello everyone' />,
    },
    {
        id: 'use-hook',
        title: 'use() Hook',
        component: () => <PlaceholderDemo title="use() Hook" />,
    },
    {
        id: 'use-optimistic',
        title: 'useOptimistic',
        component: () => <PlaceholderDemo title="useOptimistic" />,
    },
    {
        id: 'use-action-state',
        title: 'useActionState',
        component: () => <PlaceholderDemo title="useActionState" />,
    },
    {
        id: 'server-components',
        title: 'Server Components',
        component: () => <PlaceholderDemo title="Server Components" />,
    },
    {
        id: 'actions',
        title: 'Actions',
        component: () => <PlaceholderDemo title="Actions" />,
    },
    {
        id: 'suspense-improvements',
        title: 'Suspense Improvements',
        component: () => <PlaceholderDemo title="Suspense Improvements" />,
    },
    {
        id: 'ref-as-prop',
        title: 'ref as Prop',
        component: () => <PlaceholderDemo title="ref as Prop" />,
    },
    {
        id: 'hydration-errors',
        title: 'Hydration Error Improvements',
        component: () => <PlaceholderDemo title="Hydration Error Improvements" />,
    },
    {
        id: 'compiler',
        title: 'React Compiler',
        component: () => <PlaceholderDemo title="React Compiler" />,
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