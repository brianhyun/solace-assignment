import { ReactNode } from "react";

interface TableDataCellProps {
    children: ReactNode;
}

const TableDataCell = ({ children }: TableDataCellProps) => {
    return (
        <td className="px-3 py-3.5 text-left text-sm font-normal text-gray-900">
            {children}
        </td>
    );
};

export default TableDataCell;
