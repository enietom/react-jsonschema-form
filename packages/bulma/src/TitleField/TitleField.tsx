import React from 'react';
import { FieldProps } from '@rjsf/core';
import Box from 'react-bulma-components/lib/components/box';
import Heading from 'react-bulma-components/lib/components/heading';

const TitleField = ({ title }: FieldProps) => (
  <Box>
    <Heading renderAs="h5">{title}</Heading>
  </Box>
);

export default TitleField;
