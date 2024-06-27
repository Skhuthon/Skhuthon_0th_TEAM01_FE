import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const mainPage = style({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  margin: '25px auto',
  maxHeight: '600px',
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
