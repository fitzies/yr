"use client";

import { useRouter } from "next/navigation";
import React from "react";

type RowData = Array<string | number>;

interface TableProps {
  fields: string[];
  data: RowData[];
  link: boolean;
}

const Table: React.FC<TableProps> = ({ fields, data, link }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium border-light">
                <tr>
                  {fields.map((field, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-4 text-light"
                    >
                      {field}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-light hover:bg-[#222] duration-150 cursor-pointer"
                    onClick={() => {
                      if (!link) return;
                      router.push(`/browse/players/${rowIndex + 1}`);
                    }}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="whitespace-nowrap px-6 py-4"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
