import { FC } from 'react';

import { TitleListProps } from './TitleList.types';
import styles from './TitleList.module.scss';
import { Button } from '../Button';

export const TitleList: FC<TitleListProps> = ({
  titles,
  onCheck,
  onDelete,
}) => {
  const list = titles.map(({ text, id }) => (
    <li
      key={id}
      className={styles.list__item}>
      <p>{text}</p>
      <div className={styles.controls}>
        <Button
          btnType='button'
          variant='check'
          onClick={onCheck}
        />
        <Button
          btnType='button'
          variant='delete'
          onClick={onDelete}
        />
      </div>
    </li>
  ));

  return list.length ? (
    <ul className={styles.list}>{list}</ul>
  ) : (
    <p>There are no titles yet</p>
  );
};
