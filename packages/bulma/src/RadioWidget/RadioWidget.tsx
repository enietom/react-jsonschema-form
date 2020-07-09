import React from "react";
import { WidgetProps } from "@rjsf/core";
import Form from 'react-bulma-components/lib/components/form';

const RadioWidget = ({
  id,
  schema,
  options,
  required,
  disabled,
  readonly,
  label,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  const _onChange = ({}, value: any) =>
    onChange(schema.type == "boolean" ? value !== "false" : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const row = options ? options.inline : false;

  return (
    <>
      {(label || schema.title) ? (
        <Form.Label className={required ? 'required' : ''} htmlFor={id}>{label || schema.title}</Form.Label>
      ) : null}

      <Form.Field
        kind="group"
        horizontal={row}>
        {(enumOptions as any).map((option: any, i: number) => {
          const itemDisabled =
            enumDisabled && (enumDisabled as any).indexOf(option.value) != -1;

          const radio = (
            <Form.Label htmlFor={`${id}_${i}`}>
              <Form.Radio
                key={i}
                value={`${option.value}`}
                disabled={disabled || itemDisabled || readonly}
                onChange={_onChange}
                onBlur={_onBlur}
                onFocus={_onFocus}
              />
              {option.label}
            </Form.Label>
          );

          return radio;
        })}
      </Form.Field>
    </>
  );
};

export default RadioWidget;
