import { Input, Select,Tooltip,message } from 'antd';
import React from 'react'
import styles from './index.less';
const { Option } = Select;


export default class QRURLInput extends React.Component {


  constructor(props) {
    super(props);
    this.scanInput = React.createRef();
  }

  componentDidMount(){
    this.scanInput.current.value=""

  }

  handleKeyDown = e => {
    
    const charCode=e.charCode? e.charCode : e.keyCode
    
    if(charCode===229){
      this.triggerChange( '' );
      message.error('请使用扫码枪之前，请切换为英文输入法，然后重新扫码');
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
    //const scanFormInput = this.scanInput.current
    const changedValue = e.target.value;
    if(onPressEnter&&onChange&&this.scanInput){
      onChange(changedValue);
      onPressEnter(e);
      console.log("this.scanInput.current",this.scanInput.current)
      if(this.scanInput.current.handleReset){
        this.scanInput.current.handleReset();

      }
      


      return
    }
    
    console.log("onPressEnter 或者 onChange 没有定义");
    

  }


  render() {
    const { size, value, maxLength, minLength } = this.props;
    

    return (
      <div>
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
        <Input
          name="__scan_qr__"
          type="text"
         
          size={70}
          autoComplete={"off"}
          style={{imeMode:"disabled",msImeMode:"disabled"}}
          onPressEnter={this.handleScanDone}
          onKeyDown={this.handleKeyDown}
          ref={this.scanInput}
          
        />
       <span>提示：请切换到英文输入法</span>
        </div>
       
    );
  }
}

