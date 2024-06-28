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

export const changeInfoLayout = style({
  width: '270px',
  height: '50px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: `${vars.spacing.xxl} auto`,
  backgroundColor: vars.color.gray_300,
  color: vars.color.gray_200,
  fontSize: vars.size.font_sm,
  fontWeight: vars.weight.bold,
});

export const pen = style({
  marginLeft: '15px',
});

export const bookmark = style({
  margin: `${vars.spacing.xl} auto`,
  color: '#6F4E37',
  fontWeight: vars.weight.semiBold,
  fontSize: vars.size.font_sm,
  display: 'flex',
  alignItems: 'center',
});
