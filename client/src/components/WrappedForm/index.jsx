
import React from 'react';
import {
  Form,
} from 'antd';

class WrappedForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="wrapped-form">
        {
          React.Children.map(this.props.children, (child) => {
            if (!child) return false;
            const { label, initialValue, rules, getValueFromEvent } = child.props;
            return (
              <Form.Item label={label}>
                {getFieldDecorator(child.key, {
                  initialValue,
                  rules,
                  getValueFromEvent,
                })(React.cloneElement(child))}
              </Form.Item>
            );
          })
        }
      </Form>
    );
  }
}

export default WrappedForm;
