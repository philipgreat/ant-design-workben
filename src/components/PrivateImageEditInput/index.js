import { Upload, Icon, Modal } from 'antd';
import axios from 'axios';
import { notification } from 'antd';
import styles from './index.less';
import  React from 'react'
import ImageService from '../../services/ImageService'

const fileMapper = [
  { type: 'jpg', cover: 'file-image' },
  { type: 'jpeg', cover: 'file-image' },
  { type: 'png', cover: 'file-image' },
  { type: 'gif', cover: 'file-image' },
  { type: 'xls', cover: 'file-excel' },
  { type: 'xlsx', cover: 'file-excel' },
  { type: 'pdf', cover: 'file-pdf' },
  { type: 'doc', cover: 'file-word' },
  { type: 'docx', cover: 'file-word' },
  { type: 'zip', cover: 'file-zip' },
  { type: 'rar', cover: 'file-zip' },
  { type: 'txt', cover: 'file-text' },
];

const appendStyle = (imageLocation, style) => {
  if (!imageLocation) {
    return imageLocation;
  }
  if (!imageLocation.indexOf) {
    return imageLocation;
  }
  if (imageLocation.indexOf('?') < 0) {
    return imageLocation + '?x-oss-process=style/' + style;
  }
  return imageLocation.replace('small', style);
};

const appendToObjectStyle = (imageLocation, style) => {
  if (typeof imageLocation == 'object') {
    const url = appendStyle(imageLocation.url, style);
    console.log('changed url', url, 'from', imageLocation);
    const finalLocation = { ...imageLocation, url };
    console.log('finalLocation url', finalLocation);
    return finalLocation;
  }
  return appendStyle(imageLocation, style);
};

const resizeDispayImage = (imageLocation, style) => {
  if (Array.isArray(imageLocation)) {
    return imageLocation.map(imageLocation => appendToObjectStyle(imageLocation, style));
  }
  return appendStyle(imageLocation, style);
};

const resizeDispayImageInList = imageLocation => resizeDispayImage(imageLocation, 'small');

const resizeDispayImageForPreview = imageLocation => resizeDispayImage(imageLocation, 'xlarge');





export default class PrivateImageEditInput extends React.Component {
  constructor(props) {
    super(props);

    const value = props.value || '';
    this.state = {
      previewVisible: false,
      previewImage: value,
      fileList: [],
      url: value,
      token: {},
    };
  }

  componentDidMount() {
    
  }
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState({ url: value, previewImage: value });
      return;
    }
  }

  beforeUpload = file => {
    const reader = new FileReader();
    const { token } = this.state;
   
    reader.readAsDataURL(file);
    const {uploadOneImage} = ImageService
    reader.onloadend = () => {
      const image ={name:"noname", mimeType:file.type, encodeContent: reader.result}
      uploadOneImage({...image}).then((response)=>{
        if(!response.class){
          alert("??????????????????(response.class)!")
          return
        }
        if(!response.class.indexOf("ImageUploadResponse")<0){
          alert("??????????????????!-ImageUploadResponse")
          return
        }
        const imageURL = response.remoteUrl;
        const fileList = [
          {
            uid: imageURL,
            name: imageURL,
            status: 'done',
            type: imageURL,
            result: `${imageURL}`,
            url: `${imageURL}`,
            response: `${imageURL}`,
          },
        ];
        const event = { fileList };
        this.setState({ url: fileList[0].url, previewImage: fileList[0].url });
        this.handleChange(event);

      })
      

      

        /*
        uploadToServer(this, file).then(data => {
        console.log('data from server', data);

        notification.success({
          message: `????????????`,
          description: `????????????`,
        });

        const fileList = [
          {
            uid: file.uid,
            name: data.name,
            status: 'done',
            type: data.type,
            result: `${token.prefix}/${encodeURIComponent(data.name)}`,
            url: `${token.prefix}/${encodeURIComponent(data.name)}`,
            response: `${token.prefix}/${encodeURIComponent(data.name)}`,
          },
        ];
        const event = { fileList };
        this.setState({ url: fileList[0].url, previewImage: fileList[0].url });
        this.handleChange(event);
        });
        */
      
    };
    return false;
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    console.log('file for preview is ', file);
    if (!file) {
      return;
    }

    const previewFile = appendToObjectStyle(file, 'xlarge');
    console.log('preview file', previewFile);
    console.log(
      'previewImage: previewFile.url || previewFile.thumbUrl',
      previewFile.url || previewFile.thumbUrl
    );

    this.setState({
      previewImage: previewFile.url || previewFile.thumbUrl,
      previewVisible: true,
    });
  };

  //handleChange = ({ fileList }) => this.setState({ fileList });
  handleChange = ({ fileList }) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(this.state.url);
    }
  };

  handleRemove = ({ fileList }) => {
    this.setState({ url: '' });
  };

  render() {
    const { previewVisible, previewImage, url } = this.state;
    const componentFileList = [{ url, name: url }];

    const { buttonTitle } = this.props;
    // const {fileList} = this.state;
    const internalFileList =
      url === '' || typeof url === 'undefined' ? [] : [{ uid: url, url, name: url, key: url }];
    console.log('file list in render', internalFileList);
    const suffix = ' | ????????????';
    const modalTitle = buttonTitle ? buttonTitle + suffix : suffix;

    const uploadButton = (
      <div>
        <Icon type="upload" style={{ fontSize: 30 }} />
        <div className="ant-upload-text">{buttonTitle}</div>
      </div>
    );

    const coverIconFromList = uploadFileList => {
      if (!uploadFileList) {
        return 'file-unknown';
      }
      if (uploadFileList.length === 0) {
        return 'file-unknown';
      }
      const firstFile = uploadFileList[0];
      console.log('firstFile', firstFile);

      if (firstFile && firstFile.url && firstFile.url.includes('image')) {
        return 'file-image';
      }

      const firstFileSufix = (firstFile.url || firstFile.name)
        .split('.')
        .pop()
        .toLowerCase();
      console.log('firstFileSufix', firstFileSufix);

      const types = fileMapper.filter(item => item.type === firstFileSufix);

      if (!types) {
        return 'file-unknown';
      }
      if (types.length === 0) {
        return 'file-unknown';
      }

      const firstType = types[0];

      return firstType.cover;
    };

    const determinShowUploadList = uploadFileList => {
      const coverIcon = coverIconFromList(uploadFileList);
      console.log('determinShowUploadList', coverIcon);
      console.log('determinShowUploadList', coverIcon === 'file-image');
      if (coverIcon === 'file-image') {
        return true;
      }
      return false;
    };

    const renderType = icon => (
      <div>
        <Icon type={icon} style={{ fontSize: 30 }} />
        <div className="ant-upload-text">????????????</div>
      </div>
    );
    const renderCover = uploadFileList => {
      if (!uploadFileList) {
        return uploadButton;
      }
      if (uploadFileList.length === 0) {
        return uploadButton;
      }

      const coverIcon = coverIconFromList(uploadFileList);
      if (coverIcon === 'file-image') {
        return null;
      }
      return renderType(coverIcon);
    };

    const showUploadList = determinShowUploadList(internalFileList);

    console.log('componentFileList', componentFileList, 'state', this.state);
    console.log('showUploadList === true', showUploadList === true);
    // const showUploadList = true

    return (
      <div className={styles.pictureEdit}>
        <Upload
          listType="picture-card"
          fileList={resizeDispayImageInList(internalFileList)}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          onRemove={this.handleRemove}
          multiple={false}
          beforeUpload={this.beforeUpload}
          showUploadList={showUploadList}
        >
          {renderCover(internalFileList)}
        </Upload>

        <Modal
          visible={previewVisible}
          title={modalTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt={buttonTitle} style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
