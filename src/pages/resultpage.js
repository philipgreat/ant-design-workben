
import styles from './resultpage.css';
import { Result, Button, Icon, Typography } from 'antd';

const { Paragraph, Text } = Typography;

const result=()=>{


  return (<Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <Icon style={{ color: 'red' }} type="close-circle" /> Your account has been frozen 
        <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph>
        <Icon style={{ color: 'red' }} type="close-circle" /> Your account is not yet eligible to
        apply <a>Apply Unlock &gt;</a>
      </Paragraph>
    </div>
  </Result>)


}


export default function() {
  return (
    <div >
      <h1>Page resultpage</h1>
      {result()}
    </div>
  );
}
