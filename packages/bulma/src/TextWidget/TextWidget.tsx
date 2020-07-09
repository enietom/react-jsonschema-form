import React from "react";
import { WidgetProps } from "@rjsf/core";
import Form from 'react-bulma-components/lib/components/form';

interface BaseTextFieldProps {
  type?: string;
}
export type TextWidgetProps = WidgetProps & BaseTextFieldProps;

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  type,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
}: TextWidgetProps) => {
  
  let input_type = type || (schema.type as string);

  if (!['text',
    'email',
    'tel',
    'password',
    'number',
    'search',
    'color',
    'date',
    'time',
    'datetime-local'
    ].includes(input_type)) {
    input_type = 'text';
  }
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <Form.Input
      type={input_type}
      id={id}
      autoFocus={autofocus}
      required={required}
      disabled={disabled || readonly}
      name={name}
      value={value || value === 0 ? value : ""}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
};

export default TextWidget;
