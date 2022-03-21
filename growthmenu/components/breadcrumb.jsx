import React from 'react';

function Breadcrumb(props) {
    return (
        <>
            <div className="flex justify-center pt-12 ml-32">
                <div className="text-6xl text-gray-800">Welcome Back!</div>

            </div>
            <div className="flex justify-center py-2">
                <div className="text-gray-400 font-medium">Login to continue using your Account</div>
            </div>
        </>
    );
}

export default Breadcrumb;