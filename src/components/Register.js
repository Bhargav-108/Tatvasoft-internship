import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

import { Link } from "react-router-dom";
const Register = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const validationSchema = Yup.object().shape({
    fname: Yup.string()
      .min(3, "Please make sure you have entered you name with atleast 3 char.")
      .required("this field is required"),
    lname: Yup.string()
      .min(3, "Please make sure you have entered you name with atleast 3 char.")
      .required("this field is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("this field is required"),

    password: Yup.string()
      .required("This field is required")
      .min(8, "Password must be minimum 8 characters long"),
    confirm_password: Yup.string()
      .label("confirm password")
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
  };
  const onFormSubmit = async (values) => {
    console.log("On the form submitted", { ...values, role: selectedRole });
    const requestData = {
      userName: values.fname,
      userEmail: values.email,
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      requestData
    );

    if (res.status === 201) {
      toast.success("Registered succesfully", {
        position: "top-center",
        autoClose: 750,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      if (res.status === 200) {
        toast.success("delete succesfull", {
          position: "top-center",
          autoClose: 750,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });
  };
  return (
    <>
      <div className="flex font-sans flex-col items-center justify-center h-auto pt-[42px] pb[80px]">
        <div className=" font-normal text-[18px] mb-[32px]">
          <Link to="/">Home</Link> {">"}{" "}
          <span className="text-red-600">
            <Link to="/Register">Create an Account</Link>{" "}
          </span>
        </div>

        <div className="text-[#414141] font-bold text-[32px] pb-[15px]">
          Login or Create an Account
        </div>
        <div className="h-[2px] w-[130px] bg-[#F14D54] mb-[30px]"></div>
        <div className="w-[980px] font-bold text-[20px] pb-[15px] text-[#414141]">
          Personal Information
        </div>
        <div className="w-[980px] h-[1px] bg-[#E5E5E5] mb-[15px]"></div>
        <div className="w-[980px] text-[#414141] font-light text-[15px] mb-[15px]">
          Please enter the following information to create your account.
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onFormSubmit}
        >
          {({
            value,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="w-[980px] grid grid-cols-2 gap-4 mb-[36px]">
                <div>
                  <div className="mb-2">First Name *</div>
                  <div>
                    <input
                      className="w-full h-[40px] appearance-none border-[1px] border-[#cacaca] rounded-sm focus:outline-none pl-3"
                      type="text"
                      label="fname"
                      id="fname"
                      name="fname"
                      placeholder="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {touched.fname && (
                      <div className="p-5 text-red-600 text-xs font-medium text-right">
                        {errors.fname}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="mb-2">Last Name *</div>
                  <div>
                    <input
                      className="w-full h-[40px] appearance-none border-[1px] border-[#cacaca] rounded-sm focus:outline-none pl-3"
                      type="text"
                      label="lname"
                      id="lname"
                      name="lname"
                      placeholder="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {touched.lname && (
                      <div className="p-5 text-red-600 text-xs font-medium text-right">
                        {errors.lname}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="mb-2">Email Address *</div>
                  <div>
                    <input
                      className="w-full h-[40px] appearance-none border-[1px] border-[#cacaca] rounded-sm focus:outline-none pl-3"
                      type="email"
                      label="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {touched.email && (
                      <div className="p-5 text-red-600 text-xs font-medium text-right">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="mb-2">Role</div>
                  <div>
                    <Select
                      className="w-full h-[40px] appearance-none border-[1px] border-[#cacaca] rounded-sm focus:outline-none pl-3"
                      id="role"
                      value={selectedRole}
                      onChange={(event) => setSelectedRole(event.target.value)}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value={"Seller"}>Seller</MenuItem>
                      <MenuItem value={"Buyer"}>Buyer</MenuItem>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="w-[980px] font-bold text-[20px] pb-[15px] text-[#414141]">
                Login Information
              </div>
              <div className="w-[980px] grid grid-cols-2 gap-4 mb-[36px]">
                <div>
                  <div className="mb-2">Password *</div>
                  <div>
                    <input
                      className="w-full h-[40px] appearance-none border-[1px] border-[#cacaca] rounded-sm focus:outline-none pl-3"
                      type="password"
                      label="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {touched.password && (
                      <div className="p-5 text-red-600 text-xs font-medium text-right">
                        {errors.password}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="mb-2">Confirm Password *</div>
                  <div>
                    <input
                      className="w-full h-[40px] appearance-none border-[1px] border-[#cacaca] rounded-sm focus:outline-none pl-3"
                      type="password"
                      label="confirm_password"
                      id="confirm_password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {touched.confirm_password && (
                      <div className="p-5 text-red-600 text-xs font-medium text-right">
                        {errors.confirm_password}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="w-[150px] h-[50px] font-bold text-white text-xl font-sans bg-[#f14d54]"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
