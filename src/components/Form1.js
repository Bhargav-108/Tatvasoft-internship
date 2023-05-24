import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/joy/Avatar";
import Popover from "@mui/material/Popover";
import { Formik } from "formik";
import * as Yup from "yup";
const Form1 = () => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    // console.log("The new value of Name : ", name);
    // return () => {
    //   console.log("The old value of Name : ", name);
    // };
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Please make sure you have entered you name with atleast 3 char.")
      .required("this field is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("this field is required"),
    age: Yup.number("age can only be number.")
      .positive()
      .integer()
      .min(15, "minimum age is 15."),
  });

  const initialValues = {
    name: "",
    email: "",
    age: 15,
  };

  const onFormSubmit = (values) => {
    console.log("On the form submitted", values);
    alert("Form Submmited");
  };

  const handleClick = (event) => {
    console.log(123);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  return (
    <div>
      <div
        style={{
          paddingTop: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 5,
        }}
        //onClick={() => setOpen(true)}
      >
        {/*<Avatar color="primary" variant="solid">
          BH
        </Avatar>*/}
      </div>
      <div style={{ fontSize: "25px", fontWeight: "bolder" }}>
        Registration Form
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
          margin: "10px",
          paddingTop: "40px",
        }}
      >
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 5,
                }}
              >
                <div
                  style={{
                    textAlign: "left",
                    fontFamily: "sans-serif",
                    marginBottom: "10px",
                    fontSize: "large",
                  }}
                >
                  Name:<span style={{ color: "red" }}>*</span>
                </div>
                <TextField
                  variant="outlined"
                  type="text"
                  label="Name"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && (
                  <span
                    style={{
                      padding: 5,
                      color: "red",
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    {errors.name}
                  </span>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 5,
                }}
              >
                <div
                  style={{
                    textAlign: "left",
                    fontFamily: "sans-serif",
                    marginBottom: "10px",
                    fontSize: "large",
                  }}
                >
                  Email:<span style={{ color: "red" }}>*</span>
                </div>
                <TextField
                  variant="outlined"
                  type="email"
                  label="Email"
                  id="email"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && (
                  <span
                    style={{
                      padding: 5,
                      color: "red",
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    {errors.email}
                  </span>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 5,
                }}
              >
                <div
                  style={{
                    textAlign: "left",
                    fontFamily: "sans-serif",
                    marginBottom: "10px",
                    fontSize: "large",
                  }}
                >
                  Age:
                </div>
                <TextField
                  variant="outlined"
                  type="number"
                  label="Age"
                  id="age"
                  name="age"
                  placeholder="age"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.age && (
                  <span
                    style={{
                      padding: 5,
                      color: "red",
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    {errors.age}
                  </span>
                )}
              </div>
              <Button variant="contained" type="submit" className="">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
      {/*
      <Popover
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <div>
          <Button variant="contained" onClick={onHomePageButtonClick}>
            Logout
          </Button>
        </div>
      </Popover>
      */}
    </div>
  );
};
export default Form1;
