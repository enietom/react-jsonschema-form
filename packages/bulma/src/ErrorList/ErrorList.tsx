import React from 'react';
import { ErrorListProps } from '@rjsf/core';
import List from 'react-bulma-components/lib/components/list';
import Notification from 'react-bulma-components/lib/components/notification';

const ErrorList = ({ errors }: ErrorListProps) => (
  <List renderAs="ul" className="error-list-items">
    {errors.map((error, i: number) => {
      return (
        <Notification renderAs="li" key={i}>{error.stack}</Notification>
      );
    })}
  </List>
);

export default ErrorList;
