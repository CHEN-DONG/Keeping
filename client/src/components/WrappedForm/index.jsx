
import React from 'react';
import {
  Form,
} from 'antd';

class AntForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="wrapped-form">
        {
          React.Children.map(this.props.children, (child) => {
            if (!child) return false;
            const { label, initialValue, rules } = child.props;
            return (
              <Form.Item label={label}>
                {getFieldDecorator(child.key, {
                  initialValue,
                  rules,
                })(React.cloneElement(child))}
              </Form.Item>
            );
          })
        }
      </Form>
    );
  }
}

const WrappedForm = Form.create({ name: 'wrappend' })(AntForm);
export default WrappedForm;
