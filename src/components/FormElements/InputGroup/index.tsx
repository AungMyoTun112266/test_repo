import React, { forwardRef } from "react";

interface InputGroupProps {
  customClasses?: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  error?: string | null;
}

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ customClasses, label, type, placeholder, required, error,...props }, ref) => {
    return (
      <div className={customClasses}>
        <label className="text-sm font-medium xsm:text-base">
          {label}
          {required && <span className="text-red">*</span>}
        </label>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...props}
          className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        />
        {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
      </div>
    );
  }
);

export default InputGroup;
