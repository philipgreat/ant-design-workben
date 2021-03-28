import { Input, Select, Button,Drawer } from 'antd';
import React from 'react'
import RichEdit from '../RichEdit'
const { Option } = Select;

export default class RichEditInput extends React.Component {
  state = { drawerVisible: false };
  handleNumberChange = e => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    this.triggerChange({ number });
  };


  handleCurrencyChange = currency => {
    this.triggerChange({ currency });
  };

  triggerChange = changedValue => {
    const { onChange, value } = this.props;
    if (onChange) {
      onChange({
        ...value,
        ...changedValue,
      });
    }
  };
  showDrawer = () => {
    this.setState({
      drawerVisible: true,
    });
  };

  onClose = () => {
    this.setState({
      drawerVisible: false,
    });
  };
  render() {
    const { size, value } = this.props;
    return (
      <div>
        <div style={{width:"600px", height:"200px", border:"solid 1px blue"}}
          dangerouslySetInnerHTML={{
            __html: value.htmlText
          }}></div>
        <Button type="primary" icon="edit" onClick={this.showDrawer}>{'编辑'}</Button>
        <Drawer
          title="编辑内容"
          placement="right"
          closable={true}
          onClose={this.onClose}
          drawer={this.state.drawerVisible}
          onClick={this.showDrawer}
          width={720}
        >
          <RichEdit />
        </Drawer>
      </div>
    );
  }
}
