import React from 'react';

function Breadcrumb(props) {
    return (
        <div className="container grid md:grid-cols-2 m-4 md:m-12">
            <div></div>
            <div>
                <div className="flex justify-center">
                    <div className="text-6xl text-gray-800">Welcome Back!</div>
                </div>
                <div className="flex justify-center">
                    <div className="text-gray-400 font-medium">Login to continue using your Account</div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;