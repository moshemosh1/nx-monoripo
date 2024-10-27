import styles from './react-lib.module.scss';

export const yoyo =()=>{
  console.log("hello yoyo");
}


export function ReactLib() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactLib!</h1>
    </div>
  );
}

export default ReactLib;
