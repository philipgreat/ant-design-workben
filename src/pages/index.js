import styles from './index.css';
import SupplierTypeList from '../components/SupplierTypeList'
import { formatMessage } from 'umi-plugin-locale';
export default function() {
  return (
    <div className={styles.normal}>
      <SupplierTypeList/>
    </div>
  );
}
