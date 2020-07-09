import React from "react";
import Form from 'react-bulma-components/lib/components/form';
import { WidgetProps } from "@rjsf/core";

// Check to see if a schema specifies that a value must be true
function schemaRequiresTrueValue(schema) {
  // Check if const is a truthy value
  if (schema.const) {
    return true;
  }

  // Check if an enum has a single value of true
  if (schema.enum && schema.enum.length === 1 && schema.enum[0] === true) {
    return true;
  }

  // If anyOf has a single value, evaluate the subschema
  if (schema.anyOf && schema.anyOf.length === 1) {
    return schemaRequiresTrueValue(schema.anyOf[0]);
  }

  // If oneOf has a single value, evaluate the subschema
  if (schema.oneOf && schema.oneOf.length === 1) {
    return schemaRequiresTrueValue(schema.oneOf[0]);
  }

  // Evaluate each subschema in allOf, to see if one of them requires a true
  // value
  if (schema.allOf) {
    return schema.allOf.some(schemaRequiresTrueValue);
  }
}

function CheckboxWidget(props: WidgetProps) {
  const {
    schema,
    id,
    value,
    disabled,
    readonly,
    label,
    autofocus,
    onBlur,
    onFocus,
    onChange,
  } = props;

  // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords
  const required = schemaRequiresTrueValue(schema);

  return (
    <Form.Checkbox
      id={id}
      className={`${disabled || readonly ? "disabled" : ""}`}
      checked={typeof value === "undefined" ? false : value}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onChange={event => onChange(event.target.checked)}
      onBlur={onBlur && (event => onBlur(id, event.target.checked))}
      onFocus={onFocus && (event => onFocus(id, event.target.checked))}
      >
      {label}
    </Form.Checkbox>
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false,
};

export default CheckboxWidget;
