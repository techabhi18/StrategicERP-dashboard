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
      <div className="w-full">
        <h5 className={`text-sm text-black w-full mb-1`}>
          {label}
          {required && <span className="text-red-700">*</span>}
        </h5>
        <input
          {...field}
          {...props}
          placeholder={placeholder}
          invalid={isInvalid ? "true" : "false"}
          className={`w-full bg-[#f9fafe] border border-[#BDC2D0] rounded-md focus:outline-none px-2 py-1 text-sm`}
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
