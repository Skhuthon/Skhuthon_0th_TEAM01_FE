import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const inputStyle = style({
  width: '300px',
  display: 'flex',
  margin: '25px auto',
  height: '38px',
  borderRadius: vars.spacing.sm,
  border: `1px solid ${vars.color.brown_300}`,
});
