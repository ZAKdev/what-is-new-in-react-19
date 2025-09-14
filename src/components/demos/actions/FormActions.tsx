import { JSX, useState } from 'react';

const FormActions = (): JSX.Element => {
    const [result, setResult] = useState('');

    const saveAction = async (formData: FormData) => {
        await new Promise(resolve => setTimeout(resolve, 800));
        setResult(`💾 Draft saved: ${formData.get('name')}`);
    };

    const publishAction = async (formData: FormData) => {
        await new Promise(resolve => setTimeout(resolve, 1200));
        setResult(`🚀 Published: ${formData.get('name')}`);
    };

    return (
        <div className="container">
            <div className="section">
                <form>
                    <div className="form-group">
                        <input
                            className="form-input"
                            name="name"
                            placeholder="Enter article title"
                            required
                        />
                    </div>
                    <div className="flex gap-2">
                        <button formAction={saveAction} className="btn btn-secondary">
                            Save Draft
                        </button>
                        <button formAction={publishAction} className="btn btn-primary">
                            Publish
                        </button>
                    </div>
                </form>
            </div>
            {result && (
                <div className="alert alert-success">
                    {result}
                </div>
            )}
        </div>
    );
};

export default FormActions;