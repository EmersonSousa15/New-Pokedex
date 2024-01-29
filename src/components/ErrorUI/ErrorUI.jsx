import { BiSolidError } from "react-icons/bi";

const ErrorUI = () => {
    return (
        <div className="flex w-44 h-36  items-center justify-center min-h-screen text-yellow-500">
            <BiSolidError className="text-4xl" />
        </div>
    );
};

export default ErrorUI;