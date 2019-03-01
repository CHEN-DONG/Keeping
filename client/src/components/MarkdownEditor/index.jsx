import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import './index.scss';

export default class MarkdownEditor extends React.Component {
  state = {
    mdValue: '',
  }

  render() {
    return (
      <SimpleMDE ref="simpleMDE"
        value={this.state.mdValue}
        onChange={this.handleChange}
        options={
          {
            status: false,
          }
        }
      />
    );
  }

  handleChange = (value) => {
    this.setState(
      {
        mdValue: value,
      },
    );
    const onChange = this.props.onChange;
    if (onChange) onChange(value);
  };
}
