import { ComponentPropsWithoutRef } from 'react';

import CheckIcon from '../../src/assets/check.svg?react';
import { card, CardText } from '../styles/ui/card.css';
interface CardProps extends ComponentPropsWithoutRef<'div'> {
  title?: string;
  subTitle?: string;
}

export const Card = ({ title, subTitle, ...rest }: CardProps) => {
  return (
    <div className={card} {...rest}>
      {title && (
        <div className={CardText}>
          <CheckIcon />
          <p>어쩌구저쩌구</p>
        </div>
      )}

      {subTitle && <div>{subTitle}</div>}
    </div>
  );
};
