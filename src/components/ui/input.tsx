import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className = "", ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-600">
          {label}
        </label>
      )}

      <input
        className={`
          w-full px-4 py-2 rounded-xl border
          outline-none transition
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

export default Input;