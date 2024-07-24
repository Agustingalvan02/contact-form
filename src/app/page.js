"use client";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  email: Yup.string().email('Please enter a valid email').required('This field is required'),
  picked:  Yup.string().required('Please select a query type'),
  message: Yup.string().min(2, 'Too Short!')
  .max(100, 'Too Long!')
  .required('This field is required')
});


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-50 w">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
      <div className='bg-white'>
     <h1>Contact us </h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
         picked:'',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        alert(JSON.stringify(values));
       }}
     >
       {({ errors, touched }) => (
         <Form>
           Name <Field name="firstName" className="border-2 border-slate-400 rounded-md" /> 
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
           <br/>
           Last Name<Field name="lastName"   className="border-2 border-slate-400 rounded-md"/>
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
            <br/>
           Mail <Field name="email" type="email"  className="border-2 border-slate-400 rounded-md" />
           <br/>
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <div> Query type
            <br/>
           General Enquery <Field name="picked" type="radio"  value="General Enquery" />
               <br/>
           Support Request <Field name="picked" type="radio" value="Support Request"  />
               <br/>
           Message <Field name="message" type="textarea"  className="border-2 border-slate-400 rounded-md" />
           </div>
           {errors.message && touched.message ? <div>{errors.message}</div> : null}
           <br/>
           <button className= "bg-green-600" type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
      </div>
    </main>
  );
}
