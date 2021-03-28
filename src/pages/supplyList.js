import styles from './index.css';


import SupplierTypeList from '../components/SupplierTypeList'

import { ReactComponent as Logo } from '../assets/1053825_71245.svg'
import { formatMessage } from 'umi-plugin-locale';
function Analysis() {
  return <Logo width={90} height={120} />
}

export default function() {
  return (
    <div className={styles.normal}>
      <Logo width={90} height={120} />
      <SupplierTypeList/>
    </div>
  );
}
