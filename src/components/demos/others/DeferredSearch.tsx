import { JSX, useState, useDeferredValue, memo } from 'react';

const SlowList = memo(({ text }: { text: string }) => {
    const items = [];
    for (let i = 0; i < 250; i++) {
        items.push(<SlowItem key={i} text={text} />);
    }
    return <ul className="items">{items}</ul>;
});

const SlowItem = ({ text }: { text: string }) => {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // Do nothing for 1 ms per item to emulate extremely slow code
    }
    return <li className="item">Text: {text}</li>;
};

const DeferredSearch = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const deferredEmail = useDeferredValue(email, 'default value');

    return (
        <div className="form-group">
            <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your email..."
            />
            <SlowList text={deferredEmail} />
        </div>
    );
};

export default DeferredSearch;
