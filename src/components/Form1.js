import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import Input from "@mui/joy/Input";
import Avatar from "@mui/joy/Avatar";
import Popover from "@mui/material/Popover";
const Form1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState("false");
  const [anchorEl, setAnchorEl] = useState(null);
  const Navigate = useNavigate();
  const onHomePageButtonClick = () => {
    console.log("Button Clicked");
    console.log("Name : ", name);
    console.log("Email : ", email);
    Navigate("/");
  };

  const handleClick = (event) => {
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
          justifyContent: "flex-end",
          alignItems: "center",
          columnGap: 5,
        }}
        onClick={() => setOpen(true)}
      >
        <Avatar color="primary" variant="solid">
          BH
        </Avatar>
        <span>Bhargav Harsoda</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "20vh",
          coloumnGap: "10px",
          rowGap: "10px",
          padding: "10px",
          margin: "10px",
        }}
      >
        <Input
          type="text"
          placeholder="Name"
          variant="outlined"
          color="neutral"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          variant="outlined"
          color="neutral"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button variant="contained" onClick={onHomePageButtonClick}>
          Home
        </Button>
      </div>
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
    </div>
  );
};
export default Form1;
