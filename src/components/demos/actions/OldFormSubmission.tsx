import { JSX, FormEvent, useState, ChangeEvent } from 'react';

const OldFormSubmission = (): JSX.Element => {
    const [username, setUsername] = useState<string>('');
    const [state, setState] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const submitHandler = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setState(null);

        if (username.length < 3) {
            setState('Not valid username');
            setIsLoading(false);
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
        setState(username);
        setIsLoading(false);
    }

    return (
        <div className="container">
            <div className="section">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <input
                            className="form-input"
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
            {state && (
                <div className="alert alert-success">
                    <strong>Submitted:</strong> {state}
                </div>
            )}
        </div>
    );
};

export default OldFormSubmission;
