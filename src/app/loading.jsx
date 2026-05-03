import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div><span className="loading loading-spinner text-error"></span></div>
            </div>
        </div>
    );
};

export default loading;