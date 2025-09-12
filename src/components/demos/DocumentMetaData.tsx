import { JSX, Suspense } from 'react';
import {
    DocumentContainer,
    DocumentTitle,
    DocumentContent
} from './DocumentMetaData.styles';

interface DocumentMetaDataProps {
    title: string;
}

const DocumentMetaData = ({ title }: DocumentMetaDataProps): JSX.Element => {
    return (
        <Suspense fallback="loading...">
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
                rel="stylesheet"
                precedence="default"
            />
            <title>{title}</title>
            <DocumentContainer>
                <DocumentTitle>React 19 Document Metadata Demo</DocumentTitle>
                <DocumentContent>
                    <p>This demo showcases React 19's new document metadata features:</p>
                    <ul>
                        <li>Document title can be set from within any component</li>
                        <li>External stylesheets can be loaded with precedence control</li>
                        <li>Metadata automatically hoists to document head</li>
                    </ul>
                    <p>Current page title: <strong>{title}</strong></p>
                    <button
                        type="button"
                        className="btn btn-primary">
                        Bootstrap Button (loaded via React 19 metadata)
                    </button>
                </DocumentContent>
            </DocumentContainer>
        </Suspense>
    );
};

export default DocumentMetaData;
