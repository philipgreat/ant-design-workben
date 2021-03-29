import styles from './richeditform.css';

import React from 'react';
import { Button, Form } from 'antd';
import RichEditInput from '../components/RichEditInput';

class RichEditTestForm extends React.Component {
  handleSubmit = e => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('handling submit', err, values);
      if (!err) {
        console.log('Received values of form: ', values);
      }

    });
  };

  checkContent = (rule, value, callback) => {
    /*
    if (value.number > 0) {
      return callback();
    }
    callback('Price must greater than zero!');*/
    return callback();
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>

        <Form.Item label='Price'>
          {getFieldDecorator('content', {
            initialValue: '<div>hello</div>',
            rules: [{ validator: this.checkContent }],
          })(<RichEditInput />)}
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRichEditTestForm = Form.create({ name: 'customized_form_controls' })(RichEditTestForm);


export default function() {
  return (
    <div className={styles.normal}>
      <WrappedRichEditTestForm></WrappedRichEditTestForm>
    </div>
  );
}
