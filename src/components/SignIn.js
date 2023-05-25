import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const SignIn = () => {
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
  return (
    <div className="">
      <div>SignIn</div>
      <div>
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
    </div>
  );
};

export default SignIn;
