import React, { useRef, useMemo } from 'react';
import { useTable } from 'react-table';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import '../pages/ContactTable.css';

const ContactTable = () => {
  // Mock data
  const data = useMemo(() => [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      message: 'Hello!',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '098-765-4321',
      message: 'Hi there!',
    },
  ], []);

  const columns = useMemo(
    () => [
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Email ID', accessor: 'email' },
      { Header: 'Phone Number', accessor: 'phone' },
      { Header: 'Message', accessor: 'message' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const tableRef = useRef(null);

  const handlePrint = () => {
    const printContent = tableRef.current.innerHTML;
    const WindowPrint = window.open("", "", "width=900,height=600");
    WindowPrint.document.write("<html><head><title>Print</title>");
    WindowPrint.document.write(`
      <style>
        @media print {
          body * {
            visibility: hidden;
          }
          .print-container, .print-container * {
            visibility: visible;
          }
          .print-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
        }
      </style>
    `);
    WindowPrint.document.write("</head><body>");
    WindowPrint.document.write('<div class="print-container">');
    WindowPrint.document.write(printContent);
    WindowPrint.document.write("</div>");
    WindowPrint.document.write("</body></html>");
    WindowPrint.document.close();
    WindowPrint.focus();
    WindowPrint.print();
    WindowPrint.close();
  };

  return (
    <div className="table-container">
      <div className="button-container">
        <DownloadTableExcel
          filename="Contact Data"
          sheet="Contacts"
          currentTableRef={tableRef.current}
        >
          <button className="export-button">Export to Excel</button>
        </DownloadTableExcel>
        <button className="print-button" onClick={handlePrint}>Print</button>
      </div>
      <div className="table-wrapper">
        <div ref={tableRef}>
          <table {...getTableProps()} className="table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactTable;
