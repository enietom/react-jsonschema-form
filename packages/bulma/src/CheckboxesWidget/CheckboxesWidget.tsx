import React from "react";
import Element from 'react-bulma-components/lib/components/element';
import Form from 'react-bulma-components/lib/components/form';
import { WidgetProps } from '@rjsf/core';

function selectValue(value, selected, all) {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));
  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
}

function deselectValue(value, selected) {
  return selected.filter(v => v !== value);
}

function CheckboxesWidget(props: WidgetProps) {
  const { id, disabled, options, value, autofocus, readonly, onChange } = props;
  const { enumOptions, enumDisabled, inline } = options;
  return (
    <Element className="checkboxes" id={id}>
      {(enumOptions as any).map((option, index) => {
        const checked = value.indexOf(option.value) !== -1;
        const itemDisabled = enumDisabled && (enumDisabled as any).indexOf(option.value) != -1;
        const disabledCls = disabled || itemDisabled || readonly ? "disabled" : "";
        return (
          <Form.Checkbox
            key={index}
            className={(inline ? 'checkbox-inline' : 'checkbox-block') + ` ${disabledCls}`}
            id={`${id}_${index}`}
            checked={checked}
            disabled={disabled || itemDisabled || readonly}
            autoFocus={autofocus && index === 0}
            onChange={event => {
              const all = (enumOptions as any).map(({ value }) => value);
              if (event.target.checked) {
                onChange(selectValue(option.value, value, all));
              } else {
                onChange(deselectValue(option.value, value));
              }
            }}
          >
          {option.label}
          </Form.Checkbox>
        );
      })}
    </Element>
  );
}

CheckboxesWidget.defaultProps = {
  autofocus: false,
  options: {
    inline: false,
  },
};

export default CheckboxesWidget;
