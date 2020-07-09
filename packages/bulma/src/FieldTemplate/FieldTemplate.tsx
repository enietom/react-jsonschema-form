import React from "react";
import { FieldTemplateProps } from "@rjsf/core";
import Form from 'react-bulma-components/lib/components/form';
import List from 'react-bulma-components/lib/components/list';
import Notification from 'react-bulma-components/lib/components/notification';

const FieldErrorListTemplate = (errors: any) => {
  if (!errors || !errors.length) return null;

  return <List renderAs="ul" className="error-list-field">
    {errors.map( (error: any, index: number) => (
      <Notification renderAs="li" key={index}>{error}</Notification>
    ))}
  </List>
};

const FieldIsBool = (schema: any, uiSchema: any): boolean => {
  return (schema && schema['type'] == 'boolean') || (uiSchema && ['radio', 'checkbox'].includes('' + uiSchema['ui:widget']));
}

const FieldTemplate = ({
  id,
  classNames,
  children,
  description,
  disabled,
  displayLabel,
  help,
  label,
  required,
  rawErrors = [],
  rawHelp,
  schema,
  uiSchema,
}: FieldTemplateProps) => {
  
  let classnames = classNames || '';
  if (required) {
    classnames += ' required';
  }
  if (disabled) {
    classnames += ' disabled';
  }

  return (
    <Form.Field className={classnames}>
      {displayLabel && label ? (
        <Form.Label htmlFor={FieldIsBool(schema, uiSchema) ? null : id}>{label}</Form.Label>
      ) : null}
      {description}
      
      <Form.Control>
        {children}
      </Form.Control>
      
      {FieldErrorListTemplate(rawErrors)}
      <Form.Help renderAs="div">{rawHelp ? rawHelp : help}</Form.Help>
    </Form.Field>
  );
};

export default FieldTemplate;
