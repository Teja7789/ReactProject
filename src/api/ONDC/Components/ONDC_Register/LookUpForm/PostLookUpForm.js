// import React, { useState } from 'react';
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3001', // Update with your server URL
// });

// const PostLookUpForm = () => {
//   const [lookupResponse, setLookupResponse] = useState(null);
//   const [lookupPayload, setLookupPayload] = useState({
//     subscriber_id: "",
//     country: "",
//     ukId: "",
//     city: "std:080",
//     domain: "nic2004:52110",
//     type: "BAP or BPP"
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post('/performLookup', lookupPayload);
//       console.log('Lookup Response:', response.data);
//       setLookupResponse(response.data);
//     } catch (error) {
//       console.error('Lookup Error:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLookupPayload({ ...lookupPayload, [name]: value });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Subscriber ID:
//           <input
//             type="text"
//             name="subscriber_id"
//             value={lookupPayload.subscriber_id}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Country:
//           <input
//             type="text"
//             name="country"
//             value={lookupPayload.country}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           UK ID:
//           <input
//             type="text"
//             name="ukId"
//             value={lookupPayload.ukId}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Perform Lookup</button>
//       </form>
//       {lookupResponse && (
//         <div>
//           <h2>Lookup Response:</h2>
//           <pre>{JSON.stringify(lookupResponse, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostLookUpForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const PostLookUpForm = () => {
//   const [lookupResponse, setLookupResponse] = useState(null);
//   const [lookupPayload, setLookupPayload] = useState( {
//     "subscriber_id": "string",
//     "country": "string",
//     "ukId": "string",
//     "city": "std:080",
//     "domain": "nic2004:52110",
//     "type": "BAP or BPP"
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/performLookup', lookupPayload);
//       console.log('Lookup Response:', response.data);
//       setLookupResponse(response.data);
//     } catch (error) {
//       console.error('Lookup Error:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLookupPayload({ ...lookupPayload, [name]: value });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Subscriber ID:
//           <input
//             type="text"
//             name="subscriber_id"
//             value={lookupPayload.subscriber_id}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Country:
//           <input
//             type="text"
//             name="country"
//             value={lookupPayload.country}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           UK ID:
//           <input
//             type="text"
//             name="ukId"
//             value={lookupPayload.ukId}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Perform Lookup</button>
//       </form>
//       {lookupResponse && (
//         <div>
//           <h2>Lookup Response:</h2>
//           <pre>{JSON.stringify(lookupResponse, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostLookUpForm;


import React, { useState } from 'react';
import axios from 'axios';

const PostLookUpForm = () => {
  const [lookupPayload, setLookupPayload] = useState({
    subscriber_id: "",
    country: "",
    ukId: "",
    city: "std:080",
    domain: "nic2004:52110",
    type: "BAP or BPP"
  });

  const lookupUrl = 'https://virtserver.swaggerhub.com/ONDC/ONDC-Registry-Onboarding/2.0.5/lookup';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLookupPayload({ ...lookupPayload, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(lookupUrl, lookupPayload);
      console.log('Lookup Response:', response.data);
      // Handle response data here
    } catch (error) {
      console.error('Lookup Error:', error);
      // Handle errors here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Subscriber ID:
        <input
          type="text"
          name="subscriber_id"
          value={lookupPayload.subscriber_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={lookupPayload.country}
          onChange={handleChange}
        />
      </label>
      <label>
        UK ID:
        <input
          type="text"
          name="ukId"
          value={lookupPayload.ukId}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Perform Lookup</button>
    </form>
  );
};

export default PostLookUpForm;
