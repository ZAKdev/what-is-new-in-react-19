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
            <div>{title}</div>
            <button
                type="button"
                className="btn btn-primary">Primary</button>
        </Suspense>
    )
}

export default DocumentMetaData;
