"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";

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
  checked: Yup.boolean().oneOf(
    [true],
    "To submit this form, please consent to being contacted"
  ),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("This field is required"),
});

const toastOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Slide,
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 desktop:p-24 bg-green-50">
      <div className="w-full max-w-lg bg-white p-6 md:p-9 rounded-lg">
        <ToastContainer {...toastOptions} />
        <h1 className="font-bold text-2xl pb-4 text-center md:text-left">
          Contact Us
        </h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            message: "",
            email: "",
            picked: "",
            checked: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            toast.success(
              <div className="flex items-center">
                <FaCheckCircle
                  className="mr-2 text-white"
                  style={{ width: "24px", height: "24px" }}
                />
                <div>
                  <span className="font-bold">Message Sent!</span>
                  <br />
                  <small>
                    Thank you for completing the form. We'll be in touch soon!
                  </small>
                </div>
              </div>,
              {
                icon: false,
                style: {
                  fontFamily: "Open Sans, sans-serif",
                  width: "430px",
                  borderRadius: "15px",
                  backgroundColor: "#2A4244",
                  color: "#FFFFFF",
                  border: "1px solid #2A4244",
                  padding: "10px",
                },
              }
            );
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="text-sm">First Name</label>
                  <Field
                    name="firstName"
                    className={`border-2 w-full ${
                      errors.firstName && touched.firstName
                        ? "border-red-600"
                        : "border-slate-400"
                    } hover:border-green-600 rounded-lg pb-2 px-2`}
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="text-sm text-red-600">
                      {errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="text-sm">Last Name</label>
                  <Field
                    name="lastName"
                    className={`border-2 w-full ${
                      errors.lastName && touched.lastName
                        ? "border-red-600"
                        : "border-slate-400"
                    } hover:border-green-600 rounded-lg pb-2 px-2`}
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="text-sm text-red-600">
                      {errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="text-sm">Email Address</label>
                  <Field
                    name="email"
                    type="email"
                    className={`border-2 w-full ${
                      errors.email && touched.email
                        ? "border-red-600"
                        : "border-slate-400"
                    } hover:border-green-600 rounded-lg pb-2 px-2`}
                  />
                  {errors.email && touched.email ? (
                    <div className="text-sm text-red-600">{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="text-sm">Query Type</label>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <div className="flex items-center p-2 border rounded-lg border-gray-400">
                      <Field
                        name="picked"
                        type="radio"
                        value="General Enquiry"
                      />
                      <label className="text-sm ml-2">General Enquiry</label>
                    </div>
                    <div className="flex items-center p-2 border rounded-lg border-gray-400">
                      <Field
                        name="picked"
                        type="radio"
                        value="Support Request"
                      />
                      <label className="text-sm ml-2">Support Request</label>
                    </div>
                  </div>
                  {errors.picked && touched.picked ? (
                    <div className="text-sm text-red-600">{errors.picked}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="text-sm">Message</label>
                  <Field
                    name="message"
                    as="textarea"
                    rows="4"
                    className={`border-2 w-full ${
                      errors.message && touched.message
                        ? "border-red-600"
                        : "border-slate-400"
                    } hover:border-green-600 rounded-lg pb-2 px-2`}
                  />
                  {errors.message && touched.message ? (
                    <div className="text-sm text-red-600">{errors.message}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col items-start mb-6 px-3">
                <div className="flex items-center">
                  <Field type="checkbox" name="checked" className="h-4 w-4" />
                  <label className="text-sm ml-2">
                    I consent to being contacted by the team
                  </label>
                </div>
                {errors.checked && touched.checked ? (
                  <div className="text-sm text-red-600 mt-2">
                    {errors.checked}
                  </div>
                ) : null}
              </div>
              <div className="px-3">
                <button
                  className="bg-emerald-700 text-white font-bold py-2 w-full md:w-auto md:px-52 py-4 -ml-6 rounded-xl"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}
