// import React from 'react'

// function OnPostSubscribeUrl() {
//   return (
//     <div>OnPostSubscribeUrl</div>
//   )
// }

// export default OnPostSubscribeUrl

import React, { useState } from 'react';
import axios from 'axios';

function OnPostSubscribeUrl() {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the request payload
    const payload = {
      context: {
        operation: {
          ops_no: 1
        }
      },
      message: {
        request_id: "27baa06d-f90a-486c-85e5-cc621b787f04",
        timestamp: "2022-07-08T13:44:54.101Z",
        entity: {
          gst: {
            legal_entity_name: "ABC Incorporates",
            business_address: "Trade World, Mansarpur, Coorg, Karnataka 333333",
            city_code: ["std:080"],
            gst_no: "07AAACN2082N4Z7"
          },
          pan: {
            name_as_per_pan: "ABC Incorporates",
            pan_no: "ASDFP7657Q",
            date_of_incorporation: "23/06/1982"
          },
          name_of_authorised_signatory: "Anand Sharma",
          address_of_authorised_signatory: "405, Pinnacle House, Kandiwali, Mumbai 400001",
          email_id: "anand.sharma@abc.com",
          mobile_no: 9912332199,
          country: "IND",
          subscriber_id: "sit.grab.in",
          unique_key_id: "27baa06d-f90a-486c-85e5-cc621b787f04",
          callback_url: "/ondc/onboarding",
          key_pair: {
            signing_public_key: "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
            encryption_public_key: "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=",
            valid_from: "2022-07-08T13:44:54.101Z",
            valid_until: "2022-07-08T13:44:54.101Z"
          }
        },
        network_participant: [{
          subscriber_url: "/bapl",
          domain: "nic2004:52110",
          type: "buyerApp",
          msn: false,
          city_code: ["std:080"]
        }]
      }
    };

    // try {
    //   // Make the subscribe request
    //   const subscribeResponse = await axios.post('http://localhost:3001/subscribe', payload);
    //   setResponse(subscribeResponse.data);
    // } catch (error) {
    //   console.error('Error:', error.response.data);
    //   setResponse(error.response.data);
    // }


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
      
        try {
          // Make the subscribe request
          const subscribeResponse = await axios.post('http://localhost:3001/subscribe', payload);
          if (subscribeResponse && subscribeResponse.data) {
            setResponse(subscribeResponse.data);
          } else {
            console.error('Invalid subscribe response:', subscribeResponse);
            setResponse('Invalid subscribe response');
          }
        } catch (error) {
          console.error('Error:', error);
          setResponse('Error occurred. Please check the console for details.');
        }
    //   };
      
  };

  return (
    <div>
      <h1>Subscribe Form</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Subscribe</button>
      </form>

      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default OnPostSubscribeUrl;


// import React, { useState } from 'react';
// import axios from 'axios';

// function OnPostSubscribeUrl() {
//   const [response, setResponse] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make a POST request to the subscription endpoint
//       const subscribeResponse = await axios.post('https://virtserver.swaggerhub.com/ONDC/ONDC-Registry-Onboarding/2.0.5/subscribe', {
//         // Your subscription payload here
//       });

//       // Extract the subscriber_id and challenge from the response
//       const { subscriber_id, challenge } = subscribeResponse.data;

//       // Make a POST request to the on_subscribe endpoint in Node.js
//       const onSubscribeResponse = await axios.post('YOUR_NODE_SERVER_URL/callback_url/on_subscribe', {
//         subscriber_id,
//         challenge
//       });

//       setResponse(onSubscribeResponse.data);
//     } catch (error) {
//       console.error('Error:', error.response.data);
//       setResponse(error.response.data);
//     }
//   };

//   return (
//     <div>
//       <h1>Subscribe Form</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Your form fields here */}
//         <button type="submit">Subscribe</button>
//       </form>

//       {response && (
//         <div>
//           <h2>Response:</h2>
//           <pre>{JSON.stringify(response, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default OnPostSubscribeUrl;
