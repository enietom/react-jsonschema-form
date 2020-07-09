import React from 'react';
import { ObjectFieldTemplateProps } from '@rjsf/core';
import Card from 'react-bulma-components/lib/components/card';
import Element from 'react-bulma-components/lib/components/element';
import Form from 'react-bulma-components/lib/components/form';

const ObjectFieldTemplate = ({
  description,
  title,
  properties,
  uiSchema,
}: ObjectFieldTemplateProps) => {

  return (
    <Card>
      {(uiSchema['ui:title'] || title) ? (
        <Card.Header>
          <Card.Header.Title>{title}</Card.Header.Title>
          <Card.Header.Icon />
        </Card.Header>
      ) : null}
      <Card.Content>

        {description ? (
          <Element renderAs="div" className="subtitle description">{description}</Element>
        ) : null}

        {properties.map( (element, index) => (
          <Form.Field key={index} className="field-row">{element.content}</Form.Field>
        ))}

      </Card.Content>
    </Card>
  );
};

export default ObjectFieldTemplate;
