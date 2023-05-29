import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("this field is required"),

    password: Yup.string().required("This field is required"),
  });
  const onFormSubmit = async (values) => {
    console.log("On the form submitted", { values });
    const requestData = {
      userName: values.fname,
      userEmail: values.email,
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      requestData
    );

    if (res.status === 201) {
      toast.success("Login succesfully", {
        position: "top-center",
        autoClose: 750,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Login failed", {
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
  };
  return (
    <>
      <div className="flex font-sans flex-col items-center justify-center h-auto pt-[42px] pb[80px]">
        <div className=" font-normal text-[18px] mb-[32px]">
          <Link to="/">Home</Link> {">"}{" "}
          <span className="text-red-600">
            <Link to="/Login">Login</Link>
          </span>
        </div>

        <div className="text-[#414141] font-bold text-[32px] pb-[15px]">
          Login or Create an Account
        </div>
        <div className="h-[2px] w-[130px] bg-[#F14D54] mb-[30px]"></div>
        <div className="grid grid-cols-2 gap-8 w-[980px] h-[370px]">
          <div className="flex flex-col items-center justify-between">
            <div>
              <div className="w-[474px] font-bold text-[20px] pb-[15px] text-[#414141]">
                New Customer
              </div>
              <div className="w-[474px] h-[1px] bg-[#E5E5E5] mb-[15px]"></div>
              <div className="w-[474px] text-[#838383] font-light text-[15px] mb-[15px]">
                Registration is free and easy.
              </div>
              <div className="w-[474px] font-light text-[15px]">
                <ul className="pl-4 list-disc">
                  <li>Faster checkout</li>
                  <li>Save multiple shipping addresses</li>
                  <li>View and track orders and more</li>
                </ul>
              </div>
            </div>
            <div className="w-[474px] flex items-start">
              <button
                className="w-[220px] h-[50px] font-bold text-white text-xl font-sans bg-[#f14d54]"
                type="button"
              >
                Create an Account
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div>
              <div className="w-[474px] font-bold text-[20px] pb-[15px] text-[#414141]">
                Registered Customers
              </div>
              <div className="w-[474px] h-[1px] bg-[#E5E5E5] mb-[15px]"></div>
              <div className="w-[474px] text-[#414141] font-light text-[15px] mb-[15px]">
                If you have an account with us, please log in.
              </div>
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
                  <div className="w-[474px] grid grid-cols-1 gap-4 mb-[36px]">
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
                  </div>

                  <div className="w-[474px] flex items-start">
                    <button
                      className="w-[150px] h-[50px] font-bold text-white text-xl font-sans bg-[#f14d54]"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
