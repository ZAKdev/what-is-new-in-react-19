import { JSX, useOptimistic, useState } from 'react';

interface IMessage {
    isSuccess: boolean;
    message?: string;
}

const UseActionState = (): JSX.Element => {
    const [success, setSuccess] = useState<IMessage>();
    const [optimisticMessage, setOptimisticMessage] = useOptimistic(success);

    const submitHandler = async () => {
        setOptimisticMessage({
            isSuccess: true,
            message: 'Check your email for new reset password link'
        });

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (Math.random() < 0.5) throw new Error('Failed'); // Probability to be failed

            setSuccess({
                isSuccess: true,
                message: 'Check your email for new reset password link'
            });
        } catch (error) {
            console.error('Password Update Failed:', error);
            setSuccess({
                isSuccess: false,
                message: 'Try again later.'
            });
        }
    };

    return (
        <div className="container">
            <div className="section">
                <h2 className="subtitle">Example 2: Change Password</h2>
                <form action={submitHandler}>
                    <div className="form-group">
                        <input
                            className="form-input"
                            type="password"
                            name="password"
                            placeholder="Enter new password"
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        {false ? 'Submitting...' : 'Submit'}
                    </button>
                    {optimisticMessage && (
                        <div className={`alert ${optimisticMessage.isSuccess ? 'alert-info' : 'alert-error'}`}>
                            <strong>Message:</strong> {optimisticMessage.message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default UseActionState;
