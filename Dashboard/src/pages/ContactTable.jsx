import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import axios from 'axios';
import '../pages/ContactTable.css';


const backend_api = import.meta.env.VITE_BACKEND_API

const ContactTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${backend_api}/api/v2/contact/get-contacts`)
      .then(response => {
        const contacts = response.data.contacts.map(contact => ({
          id: contact._id, // Add an id field here
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          phone: contact.phoneNumber,
          message: contact.message,
          createdAt: new Date(contact.createdAt).toLocaleDateString(),
        }));
        setData(contacts);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

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
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, colIndex) => (
                    <th {...column.getHeaderProps()} key={colIndex}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, rowIndex) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={rowIndex}>
                    {row.cells.map((cell, cellIndex) => (
                      <td {...cell.getCellProps()} key={cellIndex}>{cell.render('Cell')}</td>
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
