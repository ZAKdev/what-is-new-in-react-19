import { useState } from "react";

const Header = () => {
    console.log("Header", Math.random());
    return (
    <header>
        <h1>React Counter</h1>
    </header>
    );
}

const ReactCompilerDemo = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </>
    );
};

export default ReactCompilerDemo;
