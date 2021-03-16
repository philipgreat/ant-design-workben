
import { postForm } from './http'


const PREFIX = "https://demo.doublechaintech.com/teachain/"
const uploadOneImage = (parameters) => {
  const url = `${PREFIX}changeRequestService/uploadOneImage/name/mimeType/encodeContent/`
  const requestParameters = {...parameters}
  return postForm({url,requestParameters})
}


export default {uploadOneImage}


