import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const menuList = style({
  width: '100%',
  maxHeight: '100px',
  overflowY: 'auto',
  border: '1px solid #ccc',
  borderTop: 'none',
  backgroundColor: '#fff',
  listStyle: 'none',
  margin: '0',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  color: vars.color.brown_300,
  padding: vars.spacing.sm,

  selectors: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});
