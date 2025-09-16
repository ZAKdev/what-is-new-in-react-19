import { JSX, useState } from "react";

const SimpleAction = (): JSX.Element => {
    const [result, setResult] = useState("");

    const submitHandler = async (formData: any) => {
        setResult(formData.get("name"));
    };

    return (
        <div className="container">
            <div className="section">
                <form action={submitHandler}>
                    <h2 className="subtitle">Basic Action Form</h2>
                    <div className="form-group">
                        <input
                            className="form-input"
                            name="name"
                            placeholder="Enter article title"
                            required
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            {result && <div className="alert alert-success">{result}</div>}
        </div>
    );
};

export default SimpleAction;
