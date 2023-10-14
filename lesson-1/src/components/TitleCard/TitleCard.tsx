import { FC } from 'react';

import { Button } from '../Button';
import { TitleCardProps } from './TitleCard.types';
import styles from './TitleCard.module.scss';

export const TitleCard: FC<TitleCardProps> = ({onCheck, onDelete, text}) => {
  return (
    <li className={styles.list__item}>
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
  );
};
