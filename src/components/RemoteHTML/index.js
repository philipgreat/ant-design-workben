import { Upload, Icon, Modal } from 'antd';

import React, { forwardRef, useState,useEffect } from 'react';
import useFetch from 'use-http'

//https://use-http.com/#/?id=options
export default function RemoteHTML(props) {

  const options = {headers: {
    'user-agent': 'Mozilla/4.0 MDN Example',
    'content-type': 'text/html',
    'Accept':"text/html"
  },}
  const [content, setContent] = useState('')
  const { get, post, response, loading, error } = useFetch('http://localhost:8080/teachain',
    globalOptions => {
      delete globalOptions.headers.Accept
      return {...globalOptions,headers:{'Accept':"text/html"},credentials: "include"}
  })
  useEffect(() => { initializeContent() }, []) // componentDidMount
  
  async function initializeContent() {
    //const login = await get('/secUserManager/login/SU000002/admin123/')
    //if (response.ok) setContent(login)
    const content = await get('/secUserManager/accessUserApp/UA000004/')
    if (response.ok) setContent(content)
  }
  const refresh=()=>{

    initializeContent();

  }
  if(content.length === 0 ){
    return (<div>正在载入内容.......</div>)
  }
  

  return (
    <div onClick={refresh}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>)
}
