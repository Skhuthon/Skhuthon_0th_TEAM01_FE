import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const detailPageLayout = style({
  display: 'grid',
  gridTemplateColumns: '120px 1.5fr 1fr',
  minHeight: '100vh',
  maxHeight: '100vh',
  overflowY: 'auto',
});

export const layout = style({
  boxSizing: 'border-box',
  padding: '10px',
  border: `1px solid ${vars.color.brown_50}`,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '80%',
  maxHeight: '80vh',
  overflowY: 'auto',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: vars.color.black_300,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: vars.color.brown_300,
    },
  },
});

export const p = style({
  color: vars.color.brown_50,
  selectors: {
    '&:hover': {
      color: vars.color.brown_300,
    },
  },
});

export const 칼로리 = style({
  color: vars.color.brown_300,
});

export const menuItem = style({
  color: vars.color.brown_50,
  fontSize: vars.size.font_sm,
  margin: `${vars.spacing.sm} auto`,
  cursor: 'pointer',
  textAlign: 'center',
  selectors: {
    '&:hover': {
      color: vars.color.brown_300,
    },
  },
});
