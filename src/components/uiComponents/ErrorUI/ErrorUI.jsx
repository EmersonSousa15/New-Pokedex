import { BiSolidError } from "react-icons/bi";

const ErrorUI = () => {
    return (
        <div className="text-center bg-bgCard w-64 h-28 m-5 my-6 rounded-2xl p-4">
            <div className="flex w-44 h-36  items-center justify-center min-h-screen text-yellow-500">
                <BiSolidError className="text-4xl" />
            </div>
        </div>

    );
};

export default ErrorUI;