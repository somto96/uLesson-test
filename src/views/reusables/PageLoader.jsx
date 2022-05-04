import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ULessonLogo from "assets/svgs/logo.svg";

const PageLoader = ({ message }) => {
  useEffect(() => {
    const { body } = document;

    body.classList.add("overflow-hidden");
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-95 p-5 z-20 overflow-hidden backdrop-filter backdrop-blur-lg"
      style={{ margin: 0 }}
    >
      <center className="z-10">
        <div className="flex justify-center items-center p-5 animate-pulse w-42 h-42 relative mb-4">
          <img src={ULessonLogo} className="animate-grow-2 max-w-full" alt="logo" />
        </div>
        <p className="text-white font-light loading-dot">{message}</p>
      </center>
    </div>
  );
};

PageLoader.defaultProps = {
  message: "Please wait",
};

PageLoader.propTypes = {
  message: PropTypes.string,
};

export default PageLoader;
