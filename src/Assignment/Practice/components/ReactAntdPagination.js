// import React, { useState , useEffect } from 'react'
// import {Pagination}  from 'antd';

// function ReactPagination() {
//   const [posts, setPosts] = useState([]);
//   const [total, setTotal] = useState("");
//   const [page,setPage] = useState(0);
//   const [postsPerPage,setPostPerPage] = useState(10);

//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/comments`)
//         // .then(console.log(res,"res"));
//         .then(res => res.json())
//         .then(post => {
//             console.log(post);
//             setPosts(post);
//             setTotal(post.length);
//         })
//         // console.log(apiData,"apiData")
//     },[]);

// const indexOfLastPage = page + postsPerPage;
// const indexOfFirstPage=indexOfLastPage - postsPerPage;
// const currentPosts  = posts.slice(indexOfFirstPage, indexOfLastPage);
// const data = currentPosts.map((post) =>{ 
//   return(
//   <h3 key={post.id}>{post.id}</h3>
//   );
// })
//   return (
//     <div>ReactPagination
//       <table>
//         <th>Id</th>
// <tbody>
//     <td>{data}</td>
// </tbody>
//       </table>
//         <div className="card">
//           <Pagination 
//            onChange={(value) => setPage(value)} 
//            pageSize={postsPerPage}
//            total={total}
//            current={page}
//           />  
//         </div>     
//     </div>
//   );
// }

// export default ReactPagination

//advanced

// import React, { useState , useEffect } from 'react'
// import {Pagination}  from 'antd';

// function ReactPagination() {
//   const [posts, setPosts] = useState([]);
//   const [total, setTotal] = useState("");
//   const [page,setPage] = useState(0);
//   const [postsPerPage,setPostPerPage] = useState(10);

//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/comments`)
//         // .then(console.log(res,"res"));
//         .then(res => res.json())
//         .then(post => {
//             console.log(post);
//             setPosts(post);
//             setTotal(post.length);
//         })
//         // console.log(apiData,"apiData")
//     },[]);

// const onShowSizeChange = (current, pageSize) => {
// setPostPerPage(pageSize);

// }

// const indexOfLastPage = page + postsPerPage;
// const indexOfFirstPage=indexOfLastPage - postsPerPage;
// const currentPosts  = posts.slice(indexOfFirstPage, indexOfLastPage);
// const data = currentPosts.map((post) =>{ 
//   return(
//   <h3 key={post.id}>{post.id}</h3>
//   );
// })
//   return (
//     <div>ReactPagination
//       <table>
//         <th>Id</th>
// <tbody>
//     <td>{data}</td>
// </tbody>
//       </table>
//         <div className="card">
//           <Pagination 
//            onChange={(value) => setPage(value)} 
//            pageSize={postsPerPage}
//            total={total}
//            current={page}
//            showSizeChanger
//            showQuickJumper
//            onShowSizeChange={onShowSizeChange}
//           />  
//         </div>     
//     </div>
//   );
// }

// export default ReactPagination

// all

// import React, { useState , useEffect } from 'react'
// import {Pagination}  from 'antd';

// function ReactPagination() {
//   const [posts, setPosts] = useState([]);
//   const [total, setTotal] = useState("");
//   const [page,setPage] = useState(0);
//   const [postsPerPage,setPostPerPage] = useState(10);

//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/comments`)
//         // .then(console.log(res,"res"));
//         .then(res => res.json())
//         .then(post => {
//             console.log(post);
//             setPosts(post);
//             setTotal(post.length);
//         })
//         // console.log(apiData,"apiData")
//     },[]);

// const onShowSizeChange = (current, pageSize) => {
// setPostPerPage(pageSize);
// }

// const itemRender = (current,type, originalElement) => {
//     if(type === " prev"){
//         return <a>Previous</a>
//     }
//     if(type === " next"){
//         return< a >Next</a>;
//     }
//     return originalElement;
// }

// const indexOfLastPage = page + postsPerPage;
// const indexOfFirstPage=indexOfLastPage - postsPerPage;
// const currentPosts  = posts.slice(indexOfFirstPage, indexOfLastPage);
// const data = currentPosts.map((post) =>{ 
//   return(
//   <h3 key={post.id}>{post.id}</h3>
//   );
// })
//   return (
//     <div>ReactPagination
//       <table>
//         <th>Id</th>
// <tbody>
//     <td>{data}</td>
// </tbody>
//       </table>
//         <div className="card">
//           <Pagination 
//            onChange={(value) => setPage(value)} 
//            pageSize={postsPerPage}
//            total={total}
//            current={page}
//            showSizeChanger
//            onShowSizeChange={onShowSizeChange}
//            itemRender={itemRender}
//           />  
//         </div>     
//     </div>
//   );
// }

// export default ReactPagination


//rough
import axios from 'axios';
import React, { useEffect, useState } from 'react';
export default function ReactPagination(){
  const Data = [
    {
      "id": 1,
      "username": "username2",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 2,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 3,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 4,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 5,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 6,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 7,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 8,
      "username": "username2",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 9,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 10,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 11,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 12,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 13,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 14,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 15,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    },
    {
      "id": 16,
      "username": "username3",
      "roleID": "roleID",
      "userType": "userType",
      "emailID": "emailID",
      "phoneNbr": "phoneNbr",
      "createdDt": "createdDt",
      "statusStr": "statusStr",
      "name": "test",
      "email": "test@gmail.com"
    }
  ];
  

  const [organizations, setOrganizations] = useState([]);
const [currentPage,setCurrentPage] = useState(1);
const recordPerPage = 10;
const lastIndex = currentPage * recordPerPage;
const firstIndex = lastIndex - recordPerPage;

// const records = organizations.slice(firstIndex,lastIndex); // api
const records = Data.slice(firstIndex,lastIndex);
const npage = Math.ceil(Data.length / recordPerPage);
// const numbers =[...Array(npage + 1).keys()].slice(1);
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         'http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization'
//       );
//       setOrganizations(response.data.content);
//       // setTotalRecords(response.data.totalElements);
//       console.error("response.data.content", response.data.content);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, []);

const nextPage = () => {
if(currentPage !== npage){
  setCurrentPage(currentPage +1);
}
}
function changeCurrentPage(id){
 setCurrentPage(id)
}

const prevPage = () => {
if(currentPage !== 1){
  setCurrentPage(currentPage -1);
}
}
// reqqqqqqqquired
  const data = records.map((d,i)=>(
    <div key={i}>
<p>
    {/* <span>  {d.createdDt}</span>
    <span>   {d.name} </span> */}
    <span>{d.id}-{d.username}</span>
      </p>
      </div>
  ))
  return(<div>
  

      
  {data}
  <nav >
        <ul className='pagination'>
          <li className='page-item'><a href="#" className='page-link' onClick={prevPage}>Prev</a></li>
          {/* {numbers.map((n,i) => (
            <li className={`page-item ${currentPage === n ? 'active' : ''}`}    key={i}>
              <a href='#' className='page-item'
               onClick={() =>changeCurrentPage()} >{n}</a>
            </li>
          ))} */}
          <li className='page-item'><a href="#" className='page-link' onClick={nextPage}>Next</a></li>
        </ul>
      </nav>
  </div>)
}