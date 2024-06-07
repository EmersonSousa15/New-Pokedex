import React from "react";

const Loading = () => {
    return (
        <div className="text-center bg-bgCard w-64 h-28 m-5 my-6 rounded-2xl p-4">
            <div className="flex items-center justify-center min-h-screen w-44 h-36">
                <div className="border-t-4 border-darkslategray dark:border-gainsboro border-solid rounded-full h-12 w-12 dark:border-gainsboro border-darkslategray animate-spin"></div>
            </div>
        </div>

    );
};

export default Loading
