import React from 'react';
import { WidgetProps } from '@rjsf/core';
import Form from 'react-bulma-components/lib/components/form';

const UpDownWidget = ({
  id,
  required,
  readonly,
  disabled,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  schema,
}: WidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => onChange(value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <Form.Field>
      {(label || schema.title) ? (
        <Form.Label className={required ? 'required' : ''} htmlFor={id}>{label || schema.title}</Form.Label>
      ) : null}
      
      <Form.Input
        type="number"
        id={id}
        autoFocus={autofocus}
        required={required}
        disabled={disabled || readonly}
        name={name}
        value={value ? value : ''}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </Form.Field>
  );
};

export default UpDownWidget;
