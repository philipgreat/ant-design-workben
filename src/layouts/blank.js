import styles from './index.css';

function BlankLayout(props) {
  return (
    <div className={styles.normal}>
     
      {props.children}
    </div>
  );
}

export default BlankLayout;


