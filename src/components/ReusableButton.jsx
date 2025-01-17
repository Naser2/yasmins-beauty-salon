import Link from "next/link";
import React from "react";

export const ReusableButton = ({
  theme = "bg-black text-white",
  hoverTheme = "bg-black text-black",
  children,
  href = "#",
  isLink = true,
  onClick = () => {},
}) => {
  const baseClasses = `
    text-white ${theme ?? 'btn text-white'}
    border-2 
    transition-all duration-300 ease-in-out hover:border-[#f5deb3]
  `;

  const hoverClasses = `
    hover:${hoverTheme}
    hover:rounded-[8px]
    transform hover:scale-105
  `;

  return isLink ? (
<Link
      href={href}
      className={`${baseClasses} ${hoverClasses}`}
      style={{
        padding: "16px",
        width: "auto",
        fontSize: "15px",
        fontWeight: "600",
        margin: "10px 0px 0px",
        lineHeight: "1.3",
      }}
    >
      {children}
</Link>
  ) : (
    <button
      onClick={onClick}
      className={`${baseClasses} ${hoverClasses}`}
      style={{
        padding: "16px",
        width: "auto",
        minWidth: "160px",
        maxWidth: "300px",
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
