import React, { useState,useMemo,useRef } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const container=[
  
  [{ size: [] }],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['link', 'image'],
  ['clean'],
  ['code-block']
]






function selectLocalImage(param,quillRef) {
  console.log("selectLocalImage", param,quillRef)
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.click();



  // Listen upload local image and save to server
  input.onchange = () => {
    const file = input.files[0];

    // file type is only image.
    if (/^image\//.test(file.type)) {
      //saveToServer(file);
      const quillEditor = quillRef.current.getEditor()
      const range = quillEditor.getSelection(true);
      quillEditor.insertEmbed(range.index, 'image', `https://demo.doublechaintech.com/demodata/imageManager/loadImage/drink0000/400/300/red/`);



      console.log("File", file.type)
    } else {
      console.warn('You could only upload images.');
    }
  };
}



function RichEditor(props) {
  const [value, setValue] = useState('');
  const quillRef = useRef(null);
  const modules = useMemo(() => ({
    toolbar: {
      container: container,
      handlers: {image: (value)=>selectLocalImage(value,quillRef)}
    }
  }), [])

  


  return (
    <ReactQuill ref={quillRef} style={{minHeight:"100px",height:"600px",}} modules={modules} theme="snow" value={value} onChange={setValue}/>
  );
}

export default RichEditor