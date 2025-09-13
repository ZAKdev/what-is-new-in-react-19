import { JSX } from 'react';
import { useFormStatus } from 'react-dom';

const FormStatusComp = (): JSX.Element => {
    const { pending } = useFormStatus();

    return (
        <div>
            {pending && (
                <div className="alert alert-success">
                    Loading...
                </div>
            )}
        </div>
    );
};

export default FormStatusComp;
