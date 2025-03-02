import { ErrorMessage } from "formik";

const CustomInput = ({
  field,
  form: { touched, errors },
  label,
  required,
  placeholder,
  className,
  ...props
}) => {
  const isInvalid = !!touched[field.name] && !!errors[field.name];

  return (
    <div className={`w-full ${className}`}>
      <div className="w-full flex justify-between items-center">
        <h5 className={`text-sm text-black ${className?.includes("input-full-width") ? 'w-[25%]' : 'w-[51.2%]'}`}>
          {label}
          {required && <span className="text-red-700">*</span>}
        </h5>
        <input
          {...field}
          {...props}
          placeholder={placeholder}
          invalid={isInvalid ? "true" : "false"}
          className={`${className?.includes("input-full-width") ? 'w-[75%]' : 'w-[48.8%]'} bg-blue-100 shadow-inner rounded-md focus:outline-none px-2 py-1 text-sm`}
        />
      </div>
      <div>
        <ErrorMessage
          name={field.name}
          component="div"
          className="text-red-700 text-sm font-normal"
        />
      </div>
    </div>
  );
};

export default CustomInput;
