import React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  name: string; // ✅ simple
  size?: number;
  color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  ...props
}) => {
  switch (name) {
    case "add":
      return (
        <svg
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth={2}
          viewBox="0 0 24 24"
          {...props}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );

    case "home":
      return (
        <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...props}>
          <path d="M3 10.5L12 3l9 7.5V21h-6v-6H9v6H3z" />
        </svg>
      );

    default:
      return null;
  }
};

export default SvgIcon;