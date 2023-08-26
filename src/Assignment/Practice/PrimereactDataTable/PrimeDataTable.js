import React ,{useState,useEffect}from 'react'
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import axios from 'axios';
function PrimeDataTable() {
const [posts,setPosts] = useState([]);
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{setPosts(res.data)
    // console.log(res.data);
    });
    
},[])
  return (
    <div>PrimeDataTable
        <DataTable value={posts}
        // responsiveLayout="scroll"
        paginatorTemplate="FirstPageLink 
        PageLinks NextPageLink
        LastPageLink
        CurrentPageReport RowsPerPageDropdown"
        dataKey="id"
        paginator
        emptyMessage="No data found"
        className='datatable-responsive'
        // currentPageReportTemplate="Showing {first} of 
        // {totalRecords} posts"
        rows={10}
        // paginator rowsPerPageOptions={[5]} 
        >
          <Column field="userId" sortable header="userId"></Column>
          <Column field="id" sortable header="id"></Column>
          <Column field="title" sortable header="title"></Column>
          <Column field="body" sortable header="body"></Column>
      
        </DataTable>
    </div>
  )
}

export default PrimeDataTable