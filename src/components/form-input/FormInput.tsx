import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

export const FormInput = ({ label, ...otherProps }: any) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
