import { ReactNode } from "react";

interface TableBodyProps {
    children: ReactNode;
}

const TableBody = ({ children }: TableBodyProps) => {
    return (
        <tbody className="divide-y divide-gray-200 bg-white">
            {children}
        </tbody>
    );
};

export default TableBody;
