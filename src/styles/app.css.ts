import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const root = style({
  minWidth: '375px',
  maxWidth: '375px',
  minHeight: '97vh',
  height: 'auto',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '1px solid black',
  boxSizing: 'border-box',
  padding: 0,
  backgroundColor: vars.color.white_100,
});
