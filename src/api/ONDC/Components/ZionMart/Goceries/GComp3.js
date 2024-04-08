import { useState, useEffect } from 'react';
// https://buyer.ondc.zionmart.in/api/v1/buyer/products/search
const GComp3 = () => {
   const [posts, setPosts] = useState([]);
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   
   // ... Fetch posts here
   
   // Handle post request
   const handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((res) => res.json())
         .then((post) => {
            setPosts((posts) => [post, ...posts]);
            setTitle('');
            setBody('');
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

   return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <p>Hi</p>
   );
};

export default GComp3;
//output

// {
//     "meta": {
//         "status": true,
//         "message": "created successfully",
//         "pagination": {
//             "per_page": 24,
//             "page_no": 1,
//             "total_rows": 2040,
//             "total_pages": 85
//         },
//         "filters": [
//             {
//                 "key": "price_range",
//                 "title": "Price range",
//                 "data": [
//                     {
//                         "value": "0-4399",
//                         "name": "₹0 to ₹4399"
//                     },
//                     {
//                         "value": "4399-8798",
//                         "name": "₹4399 to ₹8798"
//                     },
//                     {
//                         "value": "8798-13197",
//                         "name": "₹8798 to ₹13197"
//                     },
//                     {
//                         "value": "13197-17596",
//                         "name": "₹13197 to ₹17596"
//                     },
//                     {
//                         "value": "17596-21995",
//                         "name": "₹17596 to ₹21995"
//                     }
//                 ]
//             },
//             {
//                 "key": "provider_id",
//                 "title": "Providers",
//                 "data": [
//                     {
//                         "value": "2460114",
//                         "name": "OOSH",
//                         "images": [
//                             "https://s3.amazonaws.com/prod-workflow-docs/workflow/e92fafe8-30f7-46fc-b0d4-467a6a7d4815/1711006364827.jpeg"
//                         ],
//                         "locations": [
//                             {
//                                 "location_id": "NC-location-2460114",
//                                 "location_unique_id": "NC-location-2460114-sellerappapi.ninjacart.in",
//                                 "days_from": "1",
//                                 "days_to": "7",
//                                 "time_from": "0000",
//                                 "time_to": "2359",
//                                 "is_temporary_close": false,
//                                 "temporary_close_start_time": null,
//                                 "temporary_close_end_time": null,
//                                 "holidays": [],
//                                 "gps": "28.678373,77.147505",
//                                 "name": "OOSH",
//                                 "phone": "8151927917",
//                                 "email": "harshit.pandey@ninjacart.com",
//                                 "building": "16, Kripa Narayan Marg, ",
//                                 "locality": "16, Kripa Narayan Marg, ",
//                                 "city": "New Delhi",
//                                 "state": "Delhi",
//                                 "area_code": "110054",
//                                 "address": {
//                                     "city": "New Delhi",
//                                     "area_code": "110054",
//                                     "state": "Delhi",
//                                     "locality": "16, Kripa Narayan Marg, "
//                                 },
//                                 "circle": {
//                                     "gps": "28.678373,77.147505"
//                                 },
//                                 "time": {
//                                     "days": "1,2,3,4,5,6,7",
//                                     "schedule": {
//                                         "holidays": []
//                                     }
//                                 },
//                                 "range": {
//                                     "start": "0000",
//                                     "end": "0"
//                                 }
//                             }
//                         ],
//                         "count": 42
//                     },
//                     {
//                         "value": "2387919",
//                         "name": "SUN Marche",
//                         "images": [
//                             "https://s3.amazonaws.com/prod-workflow-docs/workflow/8a9152f4-c1c2-42d9-8797-3803763d353d/1706167231056.png"
//                         ],
//                         "locations": [],
//                         "count": 0
//                     },
//                     {
//                         "value": "2457367",
//                         "name": "Pansari Industries LLP",
//                         "images": [
//                             "https://s3.amazonaws.com/prod-workflow-docs/workflow/e92fafe8-30f7-46fc-b0d4-467a6a7d4815/1710829891332.jpg"
//                         ],
//                         "locations": [
//                             {
//                                 "location_id": "NC-location-2457367",
//                                 "location_unique_id": "NC-location-2457367-sellerappapi.ninjacart.in",
//                                 "days_from": "1",
//                                 "days_to": "7",
//                                 "time_from": "0000",
//                                 "time_to": "2359",
//                                 "is_temporary_close": false,
//                                 "temporary_close_start_time": null,
//                                 "temporary_close_end_time": null,
//                                 "holidays": [],
//                                 "gps": "28.744372,77.121068",
//                                 "name": "Pansari Industries LLP",
//                                 "phone": "8151927917",
//                                 "email": "harshit.pandey@ninjacart.com",
//                                 "building": "33/9, Main Bawana road, Samaypur badli, Near true value show room",
//                                 "locality": "33/9, Main Bawana road, Samaypur badli, Near true value show room",
//                                 "city": "New Delhi",
//                                 "state": "DELHI",
//                                 "area_code": "110042",
//                                 "address": {
//                                     "city": "New Delhi",
//                                     "area_code": "110042",
//                                     "state": "DELHI",
//                                     "locality": "33/9, Main Bawana road, Samaypur badli, Near true value show room"
//                                 },
//                                 "circle": {
//                                     "gps": "28.744372,77.121068"
//                                 },
//                                 "time": {
//                                     "days": "1,2,3,4,5,6,7",
//                                     "schedule": {
//                                         "holidays": []
//                                     }
//                                 },
//                                 "range": {
//                                     "start": "0000",
//                                     "end": "0"
//                                 }
//                             }
//                         ],
//                         "count": 83
//                     },
//                     {
//                         "value": "2436171",
//                         "name": "Khari Foods",
//                         "images": [
//                             "https://s3.amazonaws.com/prod-workflow-docs/workflow/e92fafe8-30f7-46fc-b0d4-467a6a7d4815/1709127651429.jpg"
//                         ],
//                         "locations": [
//                             {
//                                 "location_id": "NC-location-2436171",
//                                 "location_unique_id": "NC-location-2436171-sellerappapi.ninjacart.in",
//                                 "days_from": "1",
//                                 "days_to": "7",
//                                 "time_from": "0000",
//                                 "time_to": "2359",
//                                 "is_temporary_close": false,
//                                 "temporary_close_start_time": null,
//                                 "temporary_close_end_time": null,
//                                 "holidays": [],
//                                 "gps": "28.681110,77.051244",
//                                 "name": "Khari Foods",
//                                 "phone": "8151927917",
//                                 "email": "harshit.pandey@ninjacart.com",
//                                 "building": "Plot no 13A ground floor ",
//                                 "locality": "Plot no 13A ground floor ",
//                                 "city": "New Delhi",
//                                 "state": "Delhi",
//                                 "area_code": "110041",
//                                 "address": {
//                                     "city": "New Delhi",
//                                     "area_code": "110041",
//                                     "state": "Delhi",
//                                     "locality": "Plot no 13A ground floor "
//                                 },
//                                 "circle": {
//                                     "gps": "28.681110,77.051244"
//                                 },
//                                 "time": {
//                                     "days": "1,2,3,4,5,6,7",
//                                     "schedule": {
//                                         "holidays": []
//                                     }
//                                 },
//                                 "range": {
//                                     "start": "0000",
//                                     "end": "0"
//                                 }
//                             }
//                         ],
//                         "count": 33
//                     },
//                     {
//                         "value": "28919",
//                         "name": "Dhaba by Taj",
//                         "images": [
//                             "https://www.uengage.in/images/addo/logos/image-1687502822.png"
//                         ],
//                         "locations": [],
//                         "count": 0
//                     },
//                     {
//                         "value": "ONDC-STORE-GGN",
//                         "name": "ITC Store",
//                         "images": [
//                             "https://retailconnect.co.in/ONDC/itc-cart-1.png"
//                         ],
//                         "locations": [],
//                         "count": 0
//                     },
//                     {
//                         "value": "ONDC-Mondelez-GDS",
//                         "name": "Cadbury Shop",
//                         "images": [
//                             "https://retailconnect.co.in/ONDC/Mondelez/logo.jpeg"
//                         ],
//                         "locations": [],
//                         "count": 0
//                     },
//                     {
//                         "value": "ONDC-Celebrations-Store-GGN",
//                         "name": "CelebrationTime Store",
//                         "images": [
//                             "https://retailconnect.co.in/ONDC/CelebrationStore/logo.png"
//                         ],
//                         "locations": [],
//                         "count": 0
//                     },
//                     {
//                         "value": "8335",
//                         "name": "Lord of the rolls",
//                         "images": [
//                             "https://www.uengage.in/images/addo/logos/logo-8334-1668155769.jpeg"
//                         ],
//                         "locations": [],
//                         "count": 0
//                     },