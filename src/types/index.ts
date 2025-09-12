export interface DemoItem {
    id: string;
    title: string;
    component: React.ComponentType;
}

export interface NavigationProps {
    demos: DemoItem[];
    activeDemo: string;
    onDemoSelect: (demoId: string) => void;
}