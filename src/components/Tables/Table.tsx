import Image from "next/image";

// Define types for the table data
interface TableColumn {
  key: string;
  label: string;
  className?: string;
}

interface TableRow {
  [key: string]: any;
}

interface TableProps {
  columns: TableColumn[];
  data: TableRow[];
  imageKey?: string;  // Optional if there's an image column
  nameKey?: string;   // Optional for name column with image
  highlightKey?: string; // Optional key for highlighting data (e.g., revenue in green)
}

const Table = ({ columns, data, imageKey, nameKey, highlightKey }: TableProps) => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
        Top Channels
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 sm:grid-cols-5">
          {columns.map((column) => (
            <div key={column.key} className={`px-2 pb-3.5 ${column.className || ''}`}>
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                {column.label}
              </h5>
            </div>
          ))}
        </div>

        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              rowIndex === data.length - 1 ? "" : "border-b border-stroke dark:border-dark-3"
            }`}
          >
            {columns.map((column) => (
              <div
                key={column.key}
                className={`flex items-center px-2 py-4 ${column.className || ''}`}
              >
                {/* Check for image and name columns */}
                {column.key === imageKey && nameKey ? (
                  <div className="flex items-center gap-3.5">
                    <Image src={row[imageKey]} alt="Brand" width={48} height={48} />
                    <p className="hidden font-medium text-dark dark:text-white sm:block">
                      {row[nameKey]}
                    </p>
                  </div>
                ) : (
                  <p
                    className={`font-medium text-dark dark:text-white ${
                      highlightKey === column.key ? "text-green-light-1" : ""
                    }`}
                  >
                    {row[column.key]}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
