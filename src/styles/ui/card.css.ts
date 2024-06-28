import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const card = style({
  width: '290px',
  minHeight: '70px',
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  marginTop: '10px',
  backgroundColor: vars.color.white_200,
  margin: '0 auto',
  padding: '10px',
  borderRadius: vars.spacing.md,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)', // boxShadow 추가
});

export const CardText = style({
  display: 'flex',
  gap: '15px',
  flexDirection: 'row',
  color: vars.color.black_300,
  fontWeight: vars.weight.bold,
});

export const SubTitle = style({
  marginLeft: vars.spacing.md,
});

export const titleArea = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: vars.spacing.md,
});
