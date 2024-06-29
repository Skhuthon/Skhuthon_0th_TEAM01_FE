import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const mainPage = style({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '550px',
  overflowY: 'scroll',
  margin: '25px auto',
});

export const header = style({
  fontSize: vars.size.font_lg,
  color: vars.color.black_300,
  fontWeight: vars.weight.bold,
});

export const p = style({
  fontSize: vars.size.font_md,
  color: vars.color.black_200,
  marginTop: '25px',
});

export const LoginContainer = style({
  marginTop: '25px',
});

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const subTitle = style({
  color: vars.color.gray_200,
  fontSize: vars.size.font_sm,
  fontWeight: vars.weight.extraLight,
});

export const mainLayout = style({
  width: '300px',
  margin: `${vars.spacing.md} auto`,
});
