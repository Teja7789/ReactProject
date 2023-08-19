import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DataTableComponent = () => {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    // Fetch data from an API (e.g., JSONPlaceholder)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ head: [columns.map(col => col.name)], body: data.map(item => Object.values(item)) });
    doc.save('datatable.pdf');
  };

  return (
    <div>
      <DataTable title="Data Table" columns={columns} data={data} />
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default DataTableComponent;