import { ReactNode } from "react";

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

const PrimaryButton = ({ children, onClick }: ButtonProps) => {
    return <button type="button" className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={onClick}>{children}</button>;
};

const SecondaryButton = ({ children, onClick }: ButtonProps) => {
    return <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={onClick}>{children}</button>;
};

export { PrimaryButton, SecondaryButton };