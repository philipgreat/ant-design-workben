
import styles from './smalltextform.css';

import React from 'react';
import { Button, Form } from 'antd';
import SmallTextInput from '../components/SmallTextInput';

class SmallTextInputTestForm extends React.Component {
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

        <Form.Item label='Text'>
          {getFieldDecorator('content', {
            initialValue: '',
            rules: [{ validator: this.checkContent }],
          })(<SmallTextInput minLength={10} maxLength={20}/>)}
        </Form.Item>
        <Form.Item label='Text'>
          {getFieldDecorator('content2', {
            initialValue: '',
            rules: [{ validator: this.checkContent }],
          })(<SmallTextInput minLength={0} maxLength={20}/>)}
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


const WrappedSmallTextInputTestForm= Form.create({ name: 'customized_form_controls' })(SmallTextInputTestForm);


export default function() {
  return (
    <div className={styles.normal}>
      <WrappedSmallTextInputTestForm></WrappedSmallTextInputTestForm>
    </div>
  );
}
