import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  rightContent?: React.ReactNode; // buttons, actions
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  rightContent,
  className,
}) => {
  return (
    <div className={`flex items-center justify-between mb-6 ${className}`}>
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}
      </div>

      {rightContent && <div>{rightContent}</div>}
    </div>
  );
};

export default PageHeader;