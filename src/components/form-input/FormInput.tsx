export const FormInput = ({ label, ...otherProps }: any) => {
  return (
    <div>
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {" "}
          {label}
        </label>
      )}
    </div>
  );
};