import React from 'react';

const BreadCrumb = () => {
    return (
        <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
            <li className="breadcrumb-item active">Tables</li>
        </ol>
    );
};

export default BreadCrumb;