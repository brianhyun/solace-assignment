import TableHeadCell from "./head-cell";

interface TableHeadProps {
    headers: string[];
}

const TableHead = ({ headers }: TableHeadProps) => {
    return (
        <thead className="bg-gray-50">
            <tr>
                {headers.map((header) => (
                    <TableHeadCell key={header}>{header}</TableHeadCell>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;