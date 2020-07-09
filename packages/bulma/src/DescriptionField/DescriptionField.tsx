import React from 'react';
import { FieldProps } from '@rjsf/core';
import Element from 'react-bulma-components/lib/components/element';

const DescriptionField = ({ description }: FieldProps) => {
  if (!description) return null;

  return (
    <Element renderAs="p" className="description">
      {description}
    </Element>
  );
};

export default DescriptionField;
