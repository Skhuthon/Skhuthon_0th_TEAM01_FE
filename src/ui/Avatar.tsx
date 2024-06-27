import { ComponentPropsWithoutRef } from 'react';

interface AvatarProps extends ComponentPropsWithoutRef<'img'> {
  src?: string;
  alt?: string;
}
export const Avatar = ({ src, ...rest }: AvatarProps) => {
  return (
    <img
      src={src}
      {...rest}
      style={{
        ...rest.style,
        borderRadius: '50%',
      }}
    ></img>
  );
};
