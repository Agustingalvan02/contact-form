"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email adress")
    .required("This field is required"),
  picked: Yup.string().required("Please select a query type"),
  checked: Yup.string().required(
    "To submit this form, please consent to beign contacted"
  ),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("This field is required"),
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-50 w rounded-xl">
      <div>
        <div className="bg-white py-9 px-10 rounded-xl">
          <h1>Contact us </h1>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              picked: "",
              checked: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values));
            }}
          >
            {({ errors, touched }) => (
              <Form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label>First Name</label>
                    <Field
                      name="firstName"
                      className="border-2 border-slate-400 rounded-md pb-4 px-2"
                    />
                    {errors.firstName && touched.firstName ? (
                      <div>{errors.firstName}</div>
                    ) : null}
                  </div>

                  <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label>Last Name</label>
                    <Field
                      name="lastName"
                      className="border-2 border-slate-400 rounded-md pb-4 px-2"
                    />
                    {errors.lastName && touched.lastName ? (
                      <div>{errors.lastName}</div>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label>Email Adress</label>
                    <Field
                      name="email"
                      type="email"
                      className="border-2 border-slate-400 rounded-md pb-4 px-2"
                    />

                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <label> Query type</label>
                <div className="flex flex-wrap -mx-3 mb-6 space-x-4">
                  <br />
                  <div className=" ps-8 px-14 pb-2 pt-2 border border-gray-400 rounded dark:border-gray-700 ">
                    <Field name="picked" type="radio" value="General Enquery" />{" "}
                    General Enquery
                  </div>
                  
                  <div className="ps-8 px-14 pb-2 pt-2 border border-gray-400 rounded dark:border-gray-700">
                    <Field name="picked" type="radio" value="Support Request" />{" "}
                    Support Request
                  </div>
                
                  {errors.picked && touched.picked ? (
                    <div>{errors.picked}</div>
                  ) : null}
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label>Message</label>
                    <Field
                      name="message"
                      type="textarea"
                      className="border-2 border-slate-400 rounded-md px-32 pb-24"
                    />
                    {errors.message && touched.message ? (
                      <div>{errors.message}</div>
                    ) : null}
                    <br />
                  </div>
                </div>
                <div>
                  <div>
                    <Field type="checkbox" name="checked" />
                    <label className="ps-4 px-8">I consent to beign contacted by the team</label>
                    {errors.checked && touched.checked ? (
                      <div>{errors.checked}</div>
                    ) : null}
                  </div>
                </div>
                <br />
                <button className="bg-green-600 text-white font-bold py-2 px-52 rounded" type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
}
