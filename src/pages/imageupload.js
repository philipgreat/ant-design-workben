
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
  const onSubmit = (values) => {
    console.log('Success:', values);
    return false
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("p ",formRef.current)
    
   
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Form
      {...layout}
      name="basic"
      initialvalues={{ image:"http://localhost:8080/upload/e3b7462f-7e29-4ce3-a496-12eb244ceb1c.jpg",remember: true }}
      //onFinish={onFinish}
      //onFinishFailed={onFinishFailed}
      ref={formRef}
      onSubmit={(event)=>handleSubmit(event)}
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

export default function() {
  return (
    <div style={{width:"400px"}}>
      <Demo/>
    </div>
  );
}
