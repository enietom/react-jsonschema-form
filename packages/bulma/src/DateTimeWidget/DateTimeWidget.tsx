import React from "react";
import { WidgetProps } from "@rjsf/core";
import { utils } from "@rjsf/core";
import Form from 'react-bulma-components/lib/components/form';

const { localToUTC, utcToLocal } = utils;

const DateTimeWidget = ({
  id,
  required,
  readonly,
  disabled,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
}: WidgetProps) => {
  const _onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(localToUTC(value));
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);
  
  return (
    <Form.Input
      type="datetime-local"
      id={id}
      autoFocus={autofocus}
      required={required}
      disabled={disabled || readonly}
      name={name}
      value={utcToLocal(value)}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
};

export default DateTimeWidget;
