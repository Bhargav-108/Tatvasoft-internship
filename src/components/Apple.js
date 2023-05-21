import React from "react";
import "./Text.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Apple = () => {
  const Navigate = useNavigate();
  const onHomePageButtonClick = () => {
    Navigate("/");
  };
  return (
    <div>
      <div className="center">
        <h1>Apple</h1>
        <Button variant="contained" onClick={onHomePageButtonClick}>
          Navigate to Home Page
        </Button>
      </div>
      <div>
        <img
          className="img1"
          src={`${process.env.PUBLIC_URL}/apple-94.png`}
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Apple;
