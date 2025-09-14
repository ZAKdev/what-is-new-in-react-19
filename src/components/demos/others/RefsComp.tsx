import { JSX } from 'react';

const RefsComp = (): JSX.Element => {
    const shortcutRef = (element: HTMLDivElement | null) => {
        if (element) {
            const handleKeydown = (e: KeyboardEvent) => {
                if (e.metaKey && e.key === 's') {
                    e.preventDefault();
                    console.log('Save shortcut pressed!');
                }
            };
            element.addEventListener('keydown', handleKeydown);
            // React 19: return cleanup function
            return () => element.removeEventListener('keydown', handleKeydown);
        }
    };

    return (
        <div ref={shortcutRef} className="form-group" tabIndex={0}>
            <input className="form-input" placeholder="Press Cmd+S to save" />
        </div>
    );
};

export default RefsComp;
