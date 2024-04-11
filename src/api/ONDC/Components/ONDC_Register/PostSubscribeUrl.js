// import React from 'react'

// function PostSubscribeUrl() {
//   return (
//     <div>PostSubscribeUrl</div>
//   )
// }

// export default PostSubscribeUrl
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostSubscribeUrl() {
 
    // const [response, setResponse] = useState(null);
//   useEffect(() => {
//     // Sample public keys
//     const signingPublicKey = 'QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=';
//     const encryptionPublicKey = 'O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=';

//     // Prepare the request payload
//     const payload = {
//       context: {
//         operation: {
//           ops_no: 1
//         }
//       },
//       message: {
//         request_id: "27baa06d-f90a-486c-85e5-cc621b787f04",
//         timestamp: "2022-07-08T13:44:54.101Z",
//         entity: {
//           gst: {
//             legal_entity_name: "ABC Incorporates",
//             business_address: "Trade World, Mansarpur, Coorg, Karnataka 333333",
//             city_code: ["std:080"],
//             gst_no: "07AAACN2082N4Z7"
//           },
//           pan: {
//             name_as_per_pan: "ABC Incorporates",
//             pan_no: "ASDFP7657Q",
//             date_of_incorporation: "23/06/1982"
//           },
//           name_of_authorised_signatory: "Anand Sharma",
//           address_of_authorised_signatory: "405, Pinnacle House, Kandiwali, Mumbai 400001",
//           email_id: "anand.sharma@abc.com",
//           mobile_no: 9912332199,
//           country: "IND",
//           subscriber_id: "sit.grab.in",
//           unique_key_id: "27baa06d-f90a-486c-85e5-cc621b787f04",
//           callback_url: "/ondc/onboarding",
//           key_pair: {
//             signing_public_key: signingPublicKey,
//             encryption_public_key: encryptionPublicKey,
//             valid_from: "2022-07-08T13:44:54.101Z",
//             valid_until: "2022-07-08T13:44:54.101Z"
//           }
//         },
//         network_participant: [{
//           subscriber_url: "/bapl",
//           domain: "nic2004:52110",
//           type: "buyerApp",
//           msn: false,
//           city_code: ["std:080"]
//         }]
//       }
//     };

//     // Make the API call
//     axios.post('https://virtserver.swaggerhub.com/ONDC/ONDC-Registry-Onboarding/2.0.5/subscribe', payload)
//       .then(response => {
//         setResponse(response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error.response.data);
//         setResponse(error.response.data);
//       });
//   }, []);


//handleSubmit
const [response, setResponse] = useState(null);

  // Sample public keys
  const [signingPublicKey, setSigningPublicKey] = useState('');
  const [encryptionPublicKey, setEncryptionPublicKey] = useState('');

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
            signing_public_key: signingPublicKey,
            encryption_public_key: encryptionPublicKey,
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

    try {
      // Make the API call
      const response = await axios.post('https://virtserver.swaggerhub.com/ONDC/ONDC-Registry-Onboarding/2.0.5/subscribe', payload);
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error.response.data);
      setResponse(error.response.data);
    }
  };

  return (
    <div>
      {/* <h1>Response:</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre> */}

<form onSubmit={handleSubmit}>
        <label>
          Signing Public Key:
          <input type="text" value={signingPublicKey} onChange={(e) => setSigningPublicKey(e.target.value)} />
        </label>
        <br />
        <label>
          Encryption Public Key:
          <input type="text" value={encryptionPublicKey} onChange={(e) => setEncryptionPublicKey(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default PostSubscribeUrl;
