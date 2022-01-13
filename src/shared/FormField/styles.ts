import styled from 'styled-components';

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const FormFieldLabel = styled.span`
  font-size: 13px;
  text-align: center;

  color: ${props => props.theme.colors.primary};

  margin-bottom: 12px;
`;

export const FormFieldInputContainer = styled.div`
  padding-bottom: 1px;
  border-bottom: 1px solid rgb(168, 168, 168);
`;

interface FormFieldInputProps {
  textAlign?: string;
}
export const FormFieldInput = styled.input<FormFieldInputProps>`
  width: 100%;
  text-align: ${props => props.textAlign};
`;
