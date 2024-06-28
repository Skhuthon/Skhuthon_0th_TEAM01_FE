import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { card, CardText, titleArea } from '../styles/ui/card.css';
interface CardProps extends ComponentPropsWithoutRef<'div'> {
  title?: string;
  subTitle?: ReactNode;
  icon?: ReactNode;
}

export const Card = ({ title, icon, subTitle, ...rest }: CardProps) => {
  return (
    <div {...rest} className={`${card} ${rest.className}`}>
      {title && (
        <div className={CardText}>
          {icon}
          <div className={titleArea}>
            <p>{title}</p>
            {subTitle && <div>{subTitle}</div>}
          </div>
        </div>
      )}
      {rest.children}
    </div>
  );
};
