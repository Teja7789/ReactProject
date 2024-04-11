import React, { useState } from 'react';
import axios from 'axios';

const VlookupForm = () => {
  const [vlookupResponse, setVLookupResponse] = useState(null);
  const [vlookupPayload, setVLookupPayload] = useState({
    sender_subscriber_id: '',
    request_id: '',
    timestamp: '2016-08-29T09:12:33.001Z',
    search_parameters: {
      country: 'IND',
      domain: 'nic2004:52110',
      type: 'sellerApp or buyerApp',
      city: 'std:080',
      subscriber_id: 'sit.grab.in/ondc'
    },
    signature: 'Y8Q8yyVI4zCrsCX3e1WlKfJL8Vd7GRBjUoITIH1ISVmDfwxRfJ3xgLu0Pfw4seKRTaGuOdyxDFdVspJckdPFAA=='
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://virtserver.swaggerhub.com/ONDC/ONDC-Registry-Onboarding/2.0.5/vlookup', vlookupPayload);
      console.log('VLookup Response:', response.data);
      setVLookupResponse(response.data);
    } catch (error) {
      console.error('VLookup Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVLookupPayload({ ...vlookupPayload, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Sender Subscriber ID:
          <input
            type="text"
            name="sender_subscriber_id"
            value={vlookupPayload.sender_subscriber_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Request ID:
          <input
            type="text"
            name="request_id"
            value={vlookupPayload.request_id}
            onChange={handleChange}
          />
        </label>
        {/* Add more input fields for other parameters as needed */}
        <button type="submit">Perform VLookup</button>
      </form>
      {vlookupResponse && (
        <div>
          <h2>VLookup Response:</h2>
          <pre>{JSON.stringify(vlookupResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default VlookupForm;
