
import styles from './remotehtml.css';


import RemoteHTML from '../components/RemoteHTML'


//http://localhost:8080/teachain/secUserManager/accessUserApp/UA000004/

export default function() {


  return (
    <div >
      <RemoteHTML url="localhost:8080/teachain/secUserManager/accessUserApp/UA000004/" >content</RemoteHTML>
    </div>
  );
}
