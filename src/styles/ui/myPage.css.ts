import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const text_large = style({
  color: vars.color.black,
  fontSize: vars.size.font_xl,
  fontWeight: vars.weight.bold,
});

export const avatar = style({
  width: vars.spacing.xxxl,
  height: vars.spacing.xxxl,
});

export const avatarLayout = style({
  display: 'flex',
  maxHeight: '550px',
  width: '90%',
  overflowY: 'scroll',
  margin: '25px auto',
});

export const userInfoLayout = style({
  marginTop: vars.spacing.md,
  fontSize: vars.size.font_sm,
  color: vars.color.gray_200,
});
