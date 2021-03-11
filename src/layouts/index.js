import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>抱同透明供应链入驻门户</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;


