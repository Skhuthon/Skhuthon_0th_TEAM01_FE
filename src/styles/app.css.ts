import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const root = style({
  minWidth: '375px',
  maxWidth: '375px',
  minHeight: '100vh',
  margin: '0 auto',
  border: '1px solid black',
  boxSizing: 'border-box',
  padding: '0',
  backgroundColor: vars.color.black,
});
