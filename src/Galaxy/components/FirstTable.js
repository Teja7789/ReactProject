import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import PaginationTable from 'react-pagination-table';
function FirstTable() {
  // State to hold the fetched data
  const [data, setData] = useState([]);

  // State to hold data for the current page
  const [currentPageData, setCurrentPageData] = useState([]);
  
  // State to track the current page number
  const [currentPage, setCurrentPage] = useState(1);
  
  // Number of items to display per page
  const itemsPerPage = 10;

  // Column configuration for the DataTable
  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Body',
      selector: 'body',
      sortable: false,
    },
  ];

  // Fetch data from an API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Update the currentPageData based on the current page number
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentPageData(data.slice(startIndex, endIndex));
  }, [data, currentPage]);

  // Generate PDF with the data from the current page
  const generatePDF = () => {
    const doc = new jsPDF();
    const tableData = currentPageData.map(item => Object.values(item));
    doc.autoTable({ head: [columns.map(col => col.name)], body: tableData });
    doc.save('datatable.pdf');
  };

  return (
    <>
      {/* Display DataTable */}
      <PaginationTable
        columns={columns}
        data={currentPageData}
        itemsPerPage={itemsPerPage}
        pagination={false}
      />

      {/* Display DataTable with pagination */}
      {/* <DataTable
        title="Data Table"
        columns={columns}
        data={currentPageData}
        pagination={true}
        paginationPerPage={itemsPerPage}
        paginationRowsPerPageOptions={[itemsPerPage]}
        paginationTotalRows={data.length}
        onChangePage={page => setCurrentPage(page)}
      /> */}

      {/* Button to download PDF */}
      {/* <button onClick={generatePDF}>Download PDF</button> */}
    </>
  );
};

export default FirstTable


















// import React, { useState, useEffect } from 'react';
// import DataTable from 'react-data-table-component';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import PaginationTable from 'react-pagination-table';

// const DataTableComp = () => {
//   const [data, setData] = useState([]);
//   const [currentPageData, setCurrentPageData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const columns = [
//     {
//       name: 'ID',
//       selector: 'id',
//       sortable: true,
//     },
//     {
//       name: 'Title',
//       selector: 'title',
//       sortable: true,
//     },
//     {
//       name: 'Body',
//       selector: 'body',
//       sortable: false,
//     },
//   ];

//   useEffect(() => {
//     // Fetch data from an API (e.g., JSONPlaceholder)
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     setCurrentPageData(data.slice(startIndex, endIndex));
//   }, [data, currentPage]);

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     const tableData = currentPageData.map(item => Object.values(item));
//     doc.autoTable({ head: [columns.map(col => col.name)], body: tableData });
//     doc.save('datatable.pdf');
//   };

//   return (
//     <div>
//       <PaginationTable
//         columns={columns}
//         data={currentPageData}
//         itemsPerPage={itemsPerPage}
//         pagination={false}
//       />
//       <DataTable
//         title="Data Table"
//         columns={columns}
//         data={currentPageData}
//         pagination
//         paginationPerPage={itemsPerPage}
//         paginationRowsPerPageOptions={[itemsPerPage]}
//         paginationTotalRows={data.length}
//         onChangePage={page => setCurrentPage(page)}
//       />
//       <button onClick={generatePDF}>Download PDF</button>
//     </div>
//   );
// };
// export default DataTableComp;