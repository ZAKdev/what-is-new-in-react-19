import { JSX, Suspense } from 'react';

const DocumentMetaData = ({ title }: any): JSX.Element => {
    return (
        <Suspense fallback="loading...">
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
                rel="stylesheet"
                precedence="default"
            />
            <title>{title}</title>
            <p>Current page title: <strong>{title}</strong></p>
            <button
                type="button"
                className="btn btn-primary">
                Bootstrap Button
            </button>
        </Suspense>
    );
};

export default DocumentMetaData;
