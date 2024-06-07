import { useRef, useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import axios from 'axios';
import '../pages/MembershipTable.css';

const MembershipTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5500/api/v3/member/get-member')
      .then(response => {
        const members = response.data.members.map(member => ({
          fullName: member.fullName,
          gender: member.gender,
          dateOfBirth: new Date(member.dateOfBirth).toLocaleDateString(),
          category: member.category,
          caste: member.caste,
          email: member.email,
          contactNumber: member.contactNumber,
          permanentAddress: member.permanentAddress,
          permanentCity: member.permanentCity,
          permanentState: member.permanentState,
          permanentPincode: member.permanentPincode,
          highestQualification: member.highestQualification,
          occupation: member.occupation,
          currentAddress: member.currentAddress,
          currentCity: member.currentCity,
          currentState: member.currentState,
          currentPincode: member.currentPincode,
          membershipId: member.membershipId
        }));
        setData(members);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const columns = useMemo(
    () => [
      { Header: 'Full Name', accessor: 'fullName' },
      { Header: 'Gender', accessor: 'gender' },
      { Header: 'Date of Birth', accessor: 'dateOfBirth' },
      { Header: 'Category', accessor: 'category' },
      { Header: 'Caste', accessor: 'caste' },
      { Header: 'Email Address', accessor: 'email' },
      { Header: 'Contact Number', accessor: 'contactNumber' },
      { Header: 'Permanent Address', accessor: 'permanentAddress' },
      { Header: 'Permanent City', accessor: 'permanentCity' },
      { Header: 'Permanent State', accessor: 'permanentState' },
      { Header: 'Permanent Pincode', accessor: 'permanentPincode' },
      { Header: 'Highest Qualification', accessor: 'highestQualification' },
      { Header: 'Occupation', accessor: 'occupation' },
      { Header: 'Current Address', accessor: 'currentAddress' },
      { Header: 'Current City', accessor: 'currentCity' },
      { Header: 'Current State', accessor: 'currentState' },
      { Header: 'Current Pincode', accessor: 'currentPincode' },
      { Header: 'Membership ID', accessor: 'membershipId' }
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

export default MembershipTable;
