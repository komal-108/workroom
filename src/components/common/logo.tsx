import React from "react";

// import images
import logoBlue from "@/assets/images/logo-blue.png";
import logoWhite from "@/assets/images/logo-white.png";

type LogoVariant = "blue" | "white";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({
  variant = "blue",
  className = "",
  width,
  height,
}) => {
  const logoSrc = variant === "white" ? logoWhite : logoBlue;

  return (
    <img
      src={logoSrc}
      alt="Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Logo;