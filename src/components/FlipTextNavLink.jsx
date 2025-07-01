import React from "react";
import "./../App.css";
import { NavLink } from "react-router-dom";

// Reusable Text Flip Component
const TextFlip = ({
  frontText,
  backText,
  className = "",
  children,
  ...props
}) => {
  return (
    <>
      <div className={`vertical ${className}`} {...props}>
        <span className="text-front">{frontText || children}</span>
        <span className="text-back">{backText || children}</span>
      </div>
    </>
  );
};

// Flip Text NavLink Component
export const FlipNavLink = ({
  frontText,
  backText,
  className = "",
  children,
  ...props
}) => {
  return (
    <NavLink className={`menu-link ${className}`} {...props}>
      <TextFlip frontText={frontText} backText={backText}>
        {children}
      </TextFlip>
      {children && <div className="icon-container">{children}</div>}
    </NavLink>
  );
};

// Flip Text Button Component
export const FlipButton = ({
  frontText,
  backText,
  className = "",
  children,
  onClick,
  type,
  ...props
}) => {
  return (
    <button
      className={`contact_us_btn ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      <TextFlip frontText={frontText} backText={backText}>
        {children}
      </TextFlip>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 24 25"
        fill="none"
        className="btn-arrow"
      >
        <path
          d="M4 12.5H20M20 12.5L14 6.5M20 12.5L14 18.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
};

export default TextFlip;
