import React from 'react';
import MultiSchemaField from '@rjsf/core/lib/components/fields/MultiSchemaField';
import Form from 'react-bulma-components/lib/components/form';

class AnyOfField extends MultiSchemaField {

    render() {
        const field = super.render(...arguments);

        return (
            <Form.Field kind="group">
                <Form.Control>
                    {field.props.children[0].props.children}
                </Form.Control>
                <Form.Control fullwidth={true}>
                    {field.props.children[1]}
                </Form.Control>
            </Form.Field>
        );
    }
}

export default AnyOfField;
