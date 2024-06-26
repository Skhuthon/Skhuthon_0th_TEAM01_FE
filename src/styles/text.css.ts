import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

export const text = recipe({
  base: {
    fontSize: vars.size.font_md,
    color: vars.color.black,
    fontWeight: vars.weight.medium,
  },
  variants: {
    color: {},
  },
});
