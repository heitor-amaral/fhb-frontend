/* eslint-disable react/jsx-props-no-spreading */
import { InputHTMLAttributes } from 'react';
import {
  FormFieldContainer,
  FormFieldLabel,
  FormFieldInputContainer,
  FormFieldInput,
} from './styles';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  textAlign?: string;
}

function FormField({ label, textAlign = 'start', ...props }: FormFieldProps) {
  return (
    <FormFieldContainer>
      <FormFieldLabel>{label}</FormFieldLabel>
      <FormFieldInputContainer>
        <FormFieldInput textAlign={textAlign} {...props} />
      </FormFieldInputContainer>
    </FormFieldContainer>
  );
}

export default FormField;
