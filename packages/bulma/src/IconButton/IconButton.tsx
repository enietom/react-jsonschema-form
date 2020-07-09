import React from 'react';
import Button from 'react-bulma-components/lib/components/button';

const mappings: any = {
  'remove': 'fa-remove',
  'plus': 'fa-add',
  'arrow-up': 'fa-arrow-up',
  'arrow-down': 'fa-arrow-down',
  'size': 'small',
};

const IconButton = (props: any) => {
  const { icon, size, ...otherProps } = props;
  return (
    <Button {...otherProps} size={size || mappings[size]}>
      {mappings[icon]}
    </Button>
  );
};

export default IconButton;
