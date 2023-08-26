// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import axios from 'axios';

// const MyForm = () => {
//   const [name,setName] = useState('');
//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         role: '',
//         photo1: null,
//       }}
//       onSubmit={async (values) => {
//         const formData = new FormData();
//         formData.append('name', values.name);
//         formData.append('email', values.email);
//         formData.append('role', values.role);
//         formData.append('avatar', values.photo1);

//         try {
//           const response = await axios.post(
//             'http://localhost:3006/add',
//          formData
//           );

//           if (response.status === 201) {
//             console.log(name,"data");
//             console.log('User created successfully!');

//           } else {
//             console.log('An error occurred.');
//           }
//         } catch (error) {
//           console.log('An error occurred.');
//         }
//       }}
//     >
//       {(formik) => (
//         <Form>
//           <div>
//             <label htmlFor="name">Name</label>
//             <Field type="text" id="name" name="name" />
//             <ErrorMessage name="name" component="div" />
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <Field type="email" id="email" name="email" />
//             <ErrorMessage name="email" component="div" />
//           </div>
//           <div>
//             <label htmlFor="role">Role</label>
//             <Field as="select" id="role" name="role">
//               <option value="">Select a role</option>
//               <option value="admin">Admin</option>
//               <option value="user">User</option>
//             </Field>
//             <ErrorMessage name="role" component="div" />
//           </div>
//           <div>
//             <label htmlFor="photo1">Avatar</label>
//             <input
//               type="file"
//               id="photo1"
//               name="photo1"
//               onChange={(event) =>
//                 formik.setFieldValue('photo1', event.currentTarget.files[0])
//               }
//             />
//             <ErrorMessage name="photo1" component="div" />
//           </div>
//           <div>
//             <button type="submit" disabled={formik.isSubmitting}>
//               Submit
//             </button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default MyForm;


// import React from 'react';
// import { useFormik } from 'formik';
// import axios from 'axios';

// const MyForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       role: '',
//       photo1: null,
//     },
//     onSubmit: async (values) => {
//       const formData = new FormData();
//       formData.append('name', values.name);
//       formData.append('email', values.email);
//       formData.append('role', values.role);
//       formData.append('avatar', values.photo1);

//       try {
//         const response = await axios.post(
//           'http://localhost:3006/add',
//           formData
//         );

//         if (response.status === 201) {
//           console.log('User created successfully!');
//           console.log('Response data:', response.data);
//         } else {
//           console.log('An error occurred.');
//         }
//       } catch (error) {
//         console.log('An error occurred.');
//       }
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           onChange={formik.handleChange}
//           value={formik.values.name}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />
//       </div>
//       <div>
//         <label htmlFor="role">Role</label>
//         <select
//           id="role"
//           name="role"
//           onChange={formik.handleChange}
//           value={formik.values.role}
//         >
//           <option value="">Select a role</option>
//           <option value="admin">Admin</option>
//           <option value="user">User</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="photo1">Avatar</label>
//         <input
//           type="file"
//           id="photo1"
//           name="photo1"
//           onChange={(event) => {
//             formik.setFieldValue('photo1', event.currentTarget.files[0]);
//           }}
//         />
//       </div>
//       <div>
//         <button type="submit" disabled={formik.isSubmitting}>
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };
// export default MyForm;


import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: '',
      photo1: null,
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('role', values.role);
      formData.append('avatar', values.photo1);

      try {
        const response = await axios.post(
          'http://localhost:3006/add',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        if (response.status === 201) {
          console.log('User created successfully!');
          console.log('Response data:', response.data);
        } else {
          console.log('An error occurred.');
        }
      } catch (error) {
        console.log('An error occurred.');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          onChange={formik.handleChange}
          value={formik.values.role}
        >
          <option value="">Select a role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div>
        <label htmlFor="photo1">Avatar</label>
        <input
          type="file"
          id="photo1"
          name="photo1"
          onChange={(event) => {
            formik.setFieldValue('photo1', event.currentTarget.files[0]);
          }}
        />
      </div>
      <div>
        <button type="submit" disabled={formik.isSubmitting}>
          Submit
        </button>
      </div>
    </form>
  );
};




export default MyForm;

