import { Input, Select,Tooltip,message,Button } from 'antd';
import React from 'react'
import styles from './index.less';
const { Option } = Select;


export default class QRURLInput extends React.Component {
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

  constructor(props) {
    super(props);
    this.scanInput = React.createRef();
  }

  
  handleKeyDown = e => {
    
    const charCode=e.charCode? e.charCode : e.keyCode
    
    if(charCode===229){
      this.triggerChange( '' );
      message.error('请使用扫码枪之前，请切换为英文输入法，然后重新扫码');
    }

    if(charCode===13||charCode===10){
      this.handleScanDone(e)
    }

  };

  handleTextChange = e => {
    const changedValue = e.target.value;
    e.preventDefault();
    
    //console.log("handleTextChange value",changedValue);
    this.triggerChange( changedValue );
  };

  triggerChange = changedValue => {
    const { onChange, value } = this.props;
    if (onChange) {
      onChange(changedValue);
    }
  };

  handleScanDone=(e)=>{
    
    const { onChange, value,onPressEnter } = this.props;
    const scanFormInput = this.scanInput.current
    const changedValue = scanFormInput.value;
    if(onPressEnter&&onChange&&this.scanInput){
      onChange(changedValue);
      onPressEnter(e);
      console.log("this.scanInput.current",this.scanInput.current)
      scanFormInput.value=""
      return
    }
    
    console.log("onPressEnter 或者 onChange 没有定义");
    

  }


  render() {
    const { size, value, maxLength, minLength } = this.props;
    

    return (
      <div>
        <span>
        <Input
          type="text"
          size={size}
          autoComplete={"off"}
          style={{imeMode:"disabled",msImeMode:"disabled"}}
          value={value}
          onChange={this.handleTextChange}
          onKeyDown={this.handleKeyDown}
          style={{"display":"none"}}
          {...this.props}
        />
        <input
          name="__scan_qr__"
          type="text"
         
          size={70}
          autoComplete={"off"}
          style={{imeMode:"disabled",msImeMode:"disabled",height:"30px",paddingLeft:"10px"}}
          
          onKeyDown={this.handleKeyDown}
          ref={this.scanInput}
          
        />
         

        </span>
        <span style={{padding:"10px"}}>提示：请切换到英文输入法</span>
        <Button type="primary" onClick={this.handleScanDone}>手动增加</Button> 
        </div>
       
    );
  }
}

