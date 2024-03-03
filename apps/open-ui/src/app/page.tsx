import { Button } from 'react-aria-components';
import styles from './page.module.css';

export default async function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <Button>Press me</Button>
        </div>
      </div>
    </div>
  );
}
