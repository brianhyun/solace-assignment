import { ReactNode } from "react";

interface TableHeadCellProps {
    children: ReactNode;
}

const TableHead = ({ children }: TableHeadCellProps) => {
    return (
        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">{children}</th>
    );
};

export default TableHead