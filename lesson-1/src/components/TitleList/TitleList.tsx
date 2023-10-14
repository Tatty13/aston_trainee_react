import { FC, Fragment } from 'react';

import { TitleListProps } from './TitleList.types';
import styles from './TitleList.module.scss';
import { TitleCard } from '../TitleCard';

export const TitleList: FC<TitleListProps> = ({
  titles,
  onCheck,
  onDelete,
}) => {
  const list = titles.map(({ text, id }) => (
    <Fragment key={id}>
      <TitleCard
        text={text}
        onCheck={onCheck}
        onDelete={onDelete}
      />
      <div className={styles.testFragment} />
    </Fragment>
  ));

  return list.length ? (
    <ul className={styles.list}>{list}</ul>
  ) : (
    <p>There are no titles yet</p>
  );
};
