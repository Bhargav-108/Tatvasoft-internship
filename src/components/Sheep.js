import React from "react";
import "./Text.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
const Sheep = () => {
  const Navigate = useNavigate();
  const onHomePageButtonClick = () => {
    Navigate("/");
  };
  return (
    <div>
      <div className="center">
        <h1>Sheep</h1>
        <Button variant="outlined" onClick={onHomePageButtonClick}>
          Navigate to Home Page
        </Button>
      </div>
      <div>
        <img
          className="img1"
          src={`${process.env.PUBLIC_URL}/Sheep.png`}
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Sheep;
