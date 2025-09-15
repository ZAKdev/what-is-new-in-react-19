import { JSX, useActionState } from "react";

const UseActionState = (): JSX.Element => {
    const submitHandler = async (previousState: any, formData: any) => {
        const username = formData.get("username");
        if (username.length < 3) {
            return "Not valid username";
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
        return username;
    };

    const [state, submitAction, isLoading] = useActionState(
        submitHandler,
        null
    );

    return (
        <div className="container">
            <div className="section">
                <form action={submitAction}>
                    <h2 className="subtitle">State Action Form</h2>
                    <div className="form-group">
                        <input
                            className="form-input"
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
            {state && (
                <div className="alert alert-info">
                    <strong>Submitted:</strong> {state}
                </div>
            )}
        </div>
    );
};

export default UseActionState;
