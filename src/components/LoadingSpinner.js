import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div className="text-center">
            <Spinner animation="grow" variant="info" />
            <p className="text-muted">Yükleniyor...</p>
        </div>
    )
}

export default LoadingSpinner;
