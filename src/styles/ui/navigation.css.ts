import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const navigationBar = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  color: vars.color.black_100,
  fontSize: vars.size.font_xs,
  fontWeight: vars.weight.regular,
  position: 'sticky',
  bottom: '0',
  left: '0',
});
