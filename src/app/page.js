"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { svg } from "react-svg";
import successIcon from "../../public/images/icon-success-check.svg";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-50 w rounded-lg">
      <div>
        <ToastContainer {...toastOptions} />
        <div className="bg-white py-9 px-20 rounded-lg">
          <h1 className="font-bold text-2xl pb-4">Contact Us </h1>

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
              toast.success(
                <div>
                  <span className="font-bold">Message Sent!</span>
                  <br />
                  <small className>
                    Thank you for completing the form. We'll be in touch soon!
                  </small>

                </div>,
                {
                  style: {
                    fontFamily: "Open Sans, sans-serif",
                    width: "430px",
                    borderRadius: "15px",
                    backgroundColor: "#2A4244", // green background
                    color: "#FFFFFF", // white text
                    border: "1px solid #2A4244", // green border
                    padding: "10px",
                  },
                }
              );
            }}
          >
            {({ errors, touched }) => (
              <Form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="text-sm ">First Name</label>
                    <Field
                      name="firstName"
                      className={`border-2 ${
                        errors.firstName && touched.firstName
                          ? "border-red-600"
                          : "border-slate-400"
                      } hover:border-green-600 rounded-lg pb-4 px-2`}
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className="text-sm text-red-600">
                        {errors.firstName}
                      </div>
                    ) : null}
                  </div>

                  <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label className="text-sm ">Last Name</label>
                    <Field
                      name="lastName"
                      className={`border-2 ${
                        errors.firstName && touched.firstName
                          ? "border-red-600"
                          : "border-slate-400"
                      } hover:border-green-600 rounded-lg pb-4 px-2`}
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className="text-sm text-red-600">
                        {errors.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label className="text-sm ">Email Adress</label>
                    <Field
                      name="email"
                      type="email"
                      className={`border-2 ${
                        errors.firstName && touched.firstName
                          ? "border-red-600"
                          : "border-slate-400"
                      } hover:border-green-600 rounded-lg pb-4 px-28`}
                    />

                    {errors.email && touched.email ? (
                      <div className="text-sm text-red-600">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <label className="text-sm "> Query type</label>
                <div className="flex flex-wrap -mx-3 mb-6 space-x-4">
                  <br />
                  <div className=" ps-8 px-14 rounded-lg pb-2 pt-2 border border-gray-400  dark:border-gray-700 ">
                    <Field name="picked" type="radio" value="General Enquery" />{" "}
                    <label className="text-sm ">General Enquery</label>
                  </div>

                  <div className="ps-8 px-14 rounded-lg pb-2 pt-2 border border-gray-400  dark:border-gray-700">
                    <Field name="picked" type="radio" value="Support Request" />{" "}
                    <label className="text-sm ">Support Request</label>
                  </div>

                  {errors.picked && touched.picked ? (
                    <div className="text-sm text-red-600">{errors.picked}</div>
                  ) : null}
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="text-sm ">Message</label>
                    <Field
                      name="message"
                      type="textarea"
                      className={`border-2 ${
                        errors.message && touched.message
                          ? "border-red-600"
                          : "border-slate-400"
                      } hover:ring-2 hover:ring-green-600 rounded-lg pb-24 px-32`}
                    />
                    {errors.message && touched.message ? (
                      <div className="text-sm text-red-600">
                        {errors.message}
                      </div>
                    ) : null}
                    <br />
                  </div>
                </div>
                <div>
                  <div>
                    <Field type="checkbox" name="checked" />
                    <label className="ps-4 px-8 text-sm ">
                      I consent to beign contacted by the team
                    </label>
                    {errors.checked && touched.checked ? (
                      <div className="text-sm text-red-600  ">
                        {errors.checked}
                      </div>
                    ) : null}
                  </div>
                </div>
                <br />
                <button
                  className="bg-emerald-700 text-white font-bold py-4 px-56 rounded-xl text-sm"
                  type="submit"
                >
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
