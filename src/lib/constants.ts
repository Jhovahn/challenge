// TODO: add description
export const column = 80;
export const gutter = 16;
const verticalRhythm = 24;

/* A shorthand helper for applying increments of verticalRhythm
 *
 * Example:
 * `padding-top: ${rhythm(2 / 3)}px`
 */
export const rhythm = (x: number) => x * verticalRhythm;

export const maxAppWidth = column * 15;
