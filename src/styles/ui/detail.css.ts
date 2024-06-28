import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const detailPageLayout = style({
  display: 'grid',
  gridTemplateColumns: '120px 1fr 1fr',
  height: '100vh',
});

export const layout = style({
  boxSizing: 'border-box',
  padding: '10px',
  border: `1px solid ${vars.color.brown_50}`,
  display: 'flex',
  flexDirection: 'column',
  height: '80%',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: vars.color.black_300,
});

export const p = style({
  color: vars.color.brown_50,
});
