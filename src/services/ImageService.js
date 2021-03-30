
import { postForm } from './http'


//const PREFIX = "http://localhost:8080/teachain/"
const PREFIX = "https://test.baotongcha.com:433/teachain/"
const uploadOneImage = (parameters) => {
  const url = `${PREFIX}changeRequestService/uploadOneImage/name/mimeType/encodeContent/`
  const requestParameters = {...parameters}
  return postForm({url,requestParameters})
}


export default {uploadOneImage}


