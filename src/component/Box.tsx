import { FC } from 'react';

import styles from './Box.module.scss';

interface BoxProps {
  title: string;
  children: JSX.Element;
}

const Box: FC<BoxProps> = (props: BoxProps) => {
  const { title, children } = props;
  return (
    <div className={styles.box}>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default Box;
