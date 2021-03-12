import React, { useState,useMemo } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const container=[
  [{'header': [3, 4, 5, 6, false]}],
  ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
  [{color: []}, {background: []}],
  [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
  ['link', 'image'],
  ['clean']
]

function selectLocalImage() {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.click();

  // Listen upload local image and save to server
  input.onchange = () => {
    const file = input.files[0];

    // file type is only image.
    if (/^image\//.test(file.type)) {
      //saveToServer(file);
      console.log("File", file.type)
    } else {
      console.warn('You could only upload images.');
    }
  };
}

function MyComponent() {
  const [value, setValue] = useState('');
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block']
      ],
      handlers: {
        image: selectLocalImage
      }
    }
  }), [])



  return (
    <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue}/>
  );
}

export default MyComponent