import { LoaderProps } from './types';

import styles from './styles.module.scss';

const Loader = ({ isLoading, children }: LoaderProps) => {
  return isLoading ? (
    <div className={styles.loader}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;