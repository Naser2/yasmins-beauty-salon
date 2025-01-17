import React from "react";

export const ReusableButton = ({
  theme = "bg-black text-white",
  hoverTheme = "bg-main text-black",
  children,
  href = "#",
  isLink = true,
  onClick = () => {},
}) => {
  const baseClasses = `
    btn
    ${theme}
    border-2 
    transition-all duration-300 ease-in-out
  `;

  const hoverClasses = `
    hover:${hoverTheme}
    hover:rounded-[8px]
    transform hover:scale-105
  `;

  return isLink ? (
    <a
      href={href}
      className={`${baseClasses} ${hoverClasses}`}
      style={{
        padding: "16px",
        width: "auto",
        minWidth: "232px",
        maxWidth: "210px",
        fontSize: "15px",
        fontWeight: "600",
        margin: "10px 0px 0px",
        lineHeight: "1.3",
      }}
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`${baseClasses} ${hoverClasses}`}
      style={{
        padding: "16px",
        width: "auto",
        minWidth: "232px",
        maxWidth: "210px",
        fontSize: "15px",
        fontWeight: "600",
        margin: "10px 0px 0px",
        lineHeight: "1.3",
      }}
    >
      {children}
    </button>
  );
};
