import React, { useState } from 'react'

function HOC(OrginalComp) {
function ReuseComponent(){
    const [money,setMoney] = useState(10);
    const handleInc = () => {
        setMoney(money*2);
    }
    return  <OrginalComp money={money} handleInc={handleInc}/>
}
    return ReuseComponent;

}

export default HOC



// import React from "react";

// const HOC = (WrappedComponenet, entity) => {
//   return class extends React.Component {
//     state = {
//       data: [],
//       term: "",
//     };
//     componentDidMount() {
//       const fetchData = async () => {
//         const res = await fetch(
//           `https://jsonplaceholder.typicode.com/${entity}`
//         );
//         const json = await res.json();
//         this.setState({ ...this.state, data: json });
//       };
//       fetchData();
//     }
//     render() {
//       let { term, data } = this.state;
//       let filteredData = data.slice(0, 10).filter((d) => {
//         if (entity === "users") {
//           const { name } = d;
//           return name.indexOf(term) >= 0;
//         }
//         if (entity === "todos") {
//           const { title } = d;
//           return title.indexOf(term) >= 0;
//         }
//       });
//       return (
//         <div>
//           <h2>{entity}</h2>
//           <input
//             type="text"
//             value={term}
//             onChange={(e) =>
//               this.setState({ ...this.state, term: e.target.value })
//             }
//           />
//           <WrappedComponenet data={filteredData}></WrappedComponenet>
//         </div>
//       );
//     }
//   };
// };

// export default HOC;

// import React, { useState, useEffect } from "react";

// const HOC = (WrappedComponent, entity) => {
//   return function FunctionalComponent() {
//     const [data, setData] = useState([]);
//     const [term, setTerm] = useState("");

//     // useEffect(() => {
//     //   const fetchData = async () => {
//     //     const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
//     //     const json = await res.json();
//     //     setData(json);
//     //   };
//     //   fetchData();
//     // }, [entity]);

//     useEffect(() => {
//         const fetchData = async () => {
//           const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
//           const json = await res.json();
      
//           // Adding a unique identifier to each item
//           const dataWithUniqueKeys = json.map((item, index) => ({
//             ...item,
//             // Assuming each item has an 'id' property
//             key: item.id || index,
//           }));
      
//           setData(dataWithUniqueKeys);
//         };
      
//         fetchData();
//       }, [entity]);

//     // const filteredData = data.slice(0, 10).filter((d) => {
//     //   if (entity === "users") {
//     //     const { name } = d;
//     //     return name.indexOf(term) >= 0;
//     //   }
//     //   if (entity === "todos") {
//     //     const { title } = d;
//     //     return title.indexOf(term) >= 0;
//     //   }
//     //   return false;
//     // });

//     // return (
//     //   <div>
//     //     <h2>{entity}</h2>
//     //     <input
//     //       type="text"
//     //       value={term}
//     //       onChange={(e) => setTerm(e.target.value)}
//     //     />
//     //     <WrappedComponent data={filteredData} />
//     //   </div>
//     // );
//     const filteredData = data.slice(0, 10).filter((d, index) => {
//         if (entity === "users") {
//           const { name } = d;
//           return name.indexOf(term) >= 0;
//         }
//         if (entity === "todos") {
//           const { title } = d;
//           return title.indexOf(term) >= 0;
//         }
//         return false;
//       });
      
//       return (
//         <div>
//           <h2>{entity}</h2>
//           <input
//             type="text"
//             value={term}
//             onChange={(e) => setTerm(e.target.value)}
//           />
//           <WrappedComponent data={filteredData.map((item, index) => ({ ...item, key: item.id || index }))} />
//         </div>
//       );
//   };
// };
// //https://blog.logrocket.com/understanding-react-higher-order-components/
// export default HOC;
