import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const root = style({
  minWidth: '375px',
  maxWidth: '375px',
  minHeight: '100vh',
  height: 'auto',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '0.5px solid #999999',
  boxSizing: 'border-box',
  padding: 0,
  backgroundColor: vars.color.white_100,
});
