import { Input, Select } from 'antd';
import React from 'react'
import styles from './index.less';
const { Option } = Select;

const calcStyle=({value, minLength, maxLength})=>{

  if(value.length<minLength){
      return styles.tooShort
  }
  if(value.length>maxLength){
    return styles.tooLong
  }
  return styles.normal

}
const calcTips=({value, minLength, maxLength})=>{

  if(value.length<minLength&&value.length===0){
    return <span className={calcStyle({value, minLength, maxLength})}>这是必填字段，需要{minLength}-{maxLength}字</span>
  }
  if(value.length<minLength){
      return <span className={calcStyle({value, minLength, maxLength})}>输入太短了，还需要{minLength-value.length}字</span>
  }
  if(value.length>maxLength){
    return <span className={calcStyle({value, minLength, maxLength})}>输入太长了，多了 {value.length-maxLength}字</span>
  }
  return <span className={calcStyle({value, minLength, maxLength})}>已经输入{value.length}字</span>

}
export default class SmallTextInput extends React.Component {
  /*
  constructor(props) {
    super(props);

    
    this.state = {
      previewVisible: false,
      previewImage: value,
      fileList: [],
      url: value,
      token: {},
    };
  }*/


  handleTextChange = e => {
    const changedValue = e.target.value;
    console.log("handleTextChange value",changedValue);
    this.triggerChange( changedValue );
  };

  triggerChange = changedValue => {
    const { onChange, value } = this.props;
    if (onChange) {
      onChange(changedValue);
    }
  };

  render() {
    const { size, value, maxLength, minLength } = this.props;
    console.log("value",value)



    return (
      <span>
        <Input
          type="text"
          size={size}
          value={value}
          suffix={calcTips({value,minLength,maxLength})}
          
          onChange={this.handleTextChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
       
      </span>
    );
  }
}
