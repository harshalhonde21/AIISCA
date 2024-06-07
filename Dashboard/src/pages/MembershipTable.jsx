import React, { useRef, useMemo } from 'react';
import { useTable } from 'react-table';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import '../pages/MembershipTable.css';

const MembershipTable = () => {
  // Mock data
  const data = useMemo(() => [
    {
      firstName: 'John',
      gender: 'Male',
      dateOfBirth: '01/01/1980',
      category: 'General',
      caste: 'Doe',
      email: 'john.doe@example.com',
      contactNumber: '123-456-7890',
      permanentAddress: '123 Main St',
      city: 'Cityville',
      state: 'Stateville',
      pincode: '123456',
      highestQualification: 'PhD',
      occupation: 'Engineer',
      currentAddress: '456 Elm St',
    },
    {
      firstName: 'Jane',
      gender: 'Female',
      dateOfBirth: '02/02/1990',
      category: 'OBC',
      caste: 'Smith',
      email: 'jane.smith@example.com',
      contactNumber: '098-765-4321',
      permanentAddress: '789 Oak St',
      city: 'Townsville',
      state: 'Regionville',
      pincode: '654321',
      highestQualification: 'Masters',
      occupation: 'Doctor',
      currentAddress: '101 Pine St',
    },
  ], []);

  const columns = useMemo(
    () => [
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Gender', accessor: 'gender' },
      { Header: 'Date of Birth', accessor: 'dateOfBirth' },
      { Header: 'Category', accessor: 'category' },
      { Header: 'Caste', accessor: 'caste' },
      { Header: 'Email Address', accessor: 'email' },
      { Header: 'Contact Number', accessor: 'contactNumber' },
      { Header: 'Permanent Address', accessor: 'permanentAddress' },
      { Header: 'City', accessor: 'city' },
      { Header: 'State', accessor: 'state' },
      { Header: 'Pincode', accessor: 'pincode' },
      { Header: 'Highest Qualification', accessor: 'highestQualification' },
      { Header: 'Occupation', accessor: 'occupation' },
      { Header: 'Current Address', accessor: 'currentAddress' },
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
            font-size: 10px; /* Adjusted font size for better fit */
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
          @page {
            size: landscape; /* Landscape mode for wider table */
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
          filename="Membership Data"
          sheet="Memberships"
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

export default MembershipTable;
