import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const navigationBar = style({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
  color: vars.color.black_100,
  fontSize: vars.size.font_xs,
  fontWeight: vars.weight.regular,
  backgroundColor: vars.color.white_200,
  display: 'flex',
});

export const navigationActive = style({
  backgroundColor: vars.color.brown_300,
  borderTop: `1px solid ${vars.color.black_300}`,
});

export const navigationItem = style({
  width: '103px',
  height: '60px',
  textDecoration: 'none',
  display: 'flex',
  color: vars.color.black_100,
  flexDirection: 'column',
  gap: '5px',
  padding: vars.spacing.sm,
  justifyContent: 'center',
  alignItems: 'center',
});
