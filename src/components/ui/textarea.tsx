import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-600">
          {label}
        </label>
      )}

      <textarea
        className={`
          w-full px-4 py-2 rounded-xl border
          outline-none transition resize-none
          ${error ? "border-red-500" : "border-gray-300"}
          focus:ring-2 focus:ring-blue-500
          ${className}
        `}
        {...props}
      />

      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Textarea;