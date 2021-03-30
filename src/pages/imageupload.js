
import styles from './imageupload.css';


import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react'
import PrivateImageEditInput from '../components/PrivateImageEditInput'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const formRef = React.createRef()
  const handleSubmit = e => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('handling submit', err, values);
      if (!err) {
        console.log('Received values of form: ', values);
      }

    });
  };
  
  return (
    <Form
      {...layout}
      name="basic"
      initialvalues={{ image:"http://localhost:8080/upload/e3b7462f-7e29-4ce3-a496-12eb244ceb1c.jpg",remember: true }}
      //onFinish={onFinish}
      //onFinishFailed={onFinishFailed}
      ref={formRef}
      onSubmit={handleSubmit}
    >
      

      <Form.Item
        label="image"
        name="image"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <PrivateImageEditInput buttonTitle={"图片上传"} />
      </Form.Item>

     

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
const WrappedDemoForm= Form.create({ name: 'customized_form_controls' })(Demo);

export default function() {
  return (
    <div style={{width:"400px"}}>
      <WrappedDemoForm/>
    </div>
  );
}
