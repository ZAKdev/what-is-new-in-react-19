import { JSX, useState } from 'react';

// Simple expensive calculation with memoization fallback
const fibonacciMemo: { [key: number]: number } = {};
const fibonacci = (n: number): number => {
    console.log(`🔥 Calculating fibonacci(${n})`);
    if (n <= 1) return n;
    if (fibonacciMemo[n]) return fibonacciMemo[n];
    
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    fibonacciMemo[n] = result;
    return result;
};

const ReactCompilerDemo = (): JSX.Element => {
    const [count, setCount] = useState<number>(35);
    const [rerenders, setRerenders] = useState<number>(0);

    // ✨ React Compiler automatically memoizes this expensive calculation
    // No useMemo needed!
    const result = fibonacci(count);

    return (
        <div className="container">
            <h2 className="title">React Compiler Demo</h2>
            
            <div className="card mb-3">
                <h3 className="subtitle">🤖 Automatic Optimization</h3>
                <p className="text">
                    React Compiler automatically memoizes expensive calculations.
                    Check the console - fibonacci only recalculates when count changes!
                </p>
            </div>

            <div className="card mb-3">
                <div className="form-group">
                    <label className="form-label">Fibonacci Number: {count}</label>
                    <input
                        type="range"
                        min="30"
                        max="40"
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                        className="form-input"
                    />
                </div>
                
                <button 
                    onClick={() => setRerenders(prev => prev + 1)}
                    className="btn btn-secondary"
                >
                    Force Re-render #{rerenders}
                </button>
            </div>

            <div className="card">
                <h3 className="subtitle">Result</h3>
                <p className="text" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    fibonacci({count}) = {result.toLocaleString()}
                </p>
            </div>

            <div className="alert alert-success">
                ✨ Look for "Memo ✨" badge in React DevTools to verify optimization!
            </div>
        </div>
    );
};

export default ReactCompilerDemo;