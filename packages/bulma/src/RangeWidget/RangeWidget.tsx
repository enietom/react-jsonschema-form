import React from "react";
import { WidgetProps, utils } from "@rjsf/core";
import Form from 'react-bulma-components/lib/components/form';

const { rangeSpec } = utils;

const RangeWidget = ({
  value,
  readonly,
  disabled,
  onBlur,
  onFocus,
  options,
  schema,
  onChange,
  required,
  label,
  id,
}: WidgetProps) => {
  let sliderProps = { value, label, id, ...rangeSpec(schema) };

  const _onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <>
      {(label || schema.title) ? (
        <Form.Label className={required ? 'required' : ''} htmlFor={id}>{label || schema.title}</Form.Label>
      ) : null}
      <Form.Input
        type="range"
        className="slider is-fullwidth"
        disabled={disabled || readonly}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        {...sliderProps}
      />
    </>
  );
};

export default RangeWidget;
