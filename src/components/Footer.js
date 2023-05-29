import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" h-[180px] bg-[#F9F9F9] flex flex-col items-center gap-y-4 justify-center">
        <div>
          <img
            className="h-[44px] w-[180px]"
            src="https://bookstore-sooty.vercel.app/static/media/site-logo.005b78aa01d0b4eadda3fa91c02202c5.svg"
            alt="logo"
          />
        </div>
        <div>© 2015 Tatvasoft.com. All rights reserved.</div>
      </div>
    </>
  );
};

export default Footer;
