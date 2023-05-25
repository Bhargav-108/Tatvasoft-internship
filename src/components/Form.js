import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
const Form = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log("User Details:", res.data);
      setUser(res.data);
    });
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
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
    name: "",
    email: "",
  };

  const onFormSubmit = async (values) => {
    console.log("On the form submitted", values);
    const requestData = {
      userName: values.name,
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
    <div className="flex justify-center items-center ">
      <div className="p-3 flex flex-col h-auto w-[700px] bg-white items-center pt-4 rounded-md drop-shadow-2xl">
        <div className="p-3 text-[25px] font-semibold font-mono">
          Registeration Form
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
              <div className="flex flex-col ">
                <div className=" flex w-[650px] pt-2">
                  <div className="basis-1/5 p-3 text-left w-auto text-[#36352d] font-semibold">
                    UserName:
                  </div>
                  <TextField
                    className="basis-4/5 p-3 font-medium border rounded-md border-[#e1ae80] placeholder:opacity-60"
                    variant="outlined"
                    type="text"
                    label="Name"
                    id="name"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.name && (
                  <div className="p-5 text-red-600 text-xs font-medium text-right">
                    {errors.name}
                  </div>
                )}
                <div className=" flex w-[650px] pt-2">
                  <div className="basis-1/5 p-3 text-left w-auto text-[#36352d] font-semibold">
                    Email:
                  </div>
                  <TextField
                    className="basis-4/5 p-3 font-medium border rounded-md border-[#e1ae80] placeholder:opacity-60"
                    variant="outlined"
                    type="email"
                    label="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.email && (
                  <div className="p-5 text-red-600 text-xs font-medium text-right">
                    {errors.email}
                  </div>
                )}
                <div className=" flex w-[650px] pt-2">
                  <div className="basis-2/5 p-3 text-left w-auto text-[#36352d] font-semibold">
                    Password:
                  </div>
                  <TextField
                    className="basis-4/5 p-3 font-medium border rounded-md border-[#e1ae80] placeholder:opacity-60"
                    variant="outlined"
                    type="password"
                    label="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.password && (
                  <div className="p-5 text-red-600 text-xs font-medium text-right">
                    {errors.password}
                  </div>
                )}
                <div className=" flex w-[650px] pt-2">
                  <div className="basis-2/5 p-3 text-left w-auto text-[#36352d] font-semibold">
                    Confirm Password:
                  </div>
                  <TextField
                    className="basis-4/5 p-3 font-medium border rounded-md border-[#e1ae80] placeholder:opacity-60"
                    variant="outlined"
                    type="password"
                    label="confirm_password"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="confirm password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.confirm_password && (
                  <div className="p-5 text-red-600 text-xs font-medium text-right">
                    {errors.confirm_password}
                  </div>
                )}
              </div>

              <div className="pb-5">
                <button
                  type="submit"
                  className="bg-[#fcf6ac] w-[650px] rounded-md h-12 justify-center mt-5  font-semibold text-lg border-[#e1ae80] border-2 "
                >
                  Register
                </button>
              </div>
            </form>
          )}
        </Formik>
        <div>
          {user.map((item) => (
            <div key={item.id}>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
