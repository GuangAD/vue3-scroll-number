/**
 * form https://github.com/bameyrick/js-easing-functions
 * @param elapsed
 * @param initialValue
 * @param amountOfChange
 * @param duration
 * @returns
 */
export function easeInOutCubic(
  elapsed: number,
  initialValue: number,
  amountOfChange: number,
  duration: number
) {
  if ((elapsed /= duration / 2) < 1) {
    return (amountOfChange / 2) * elapsed * elapsed * elapsed + initialValue
  }
  return (amountOfChange / 2) * ((elapsed -= 2) * elapsed * elapsed + 2) + initialValue
}
