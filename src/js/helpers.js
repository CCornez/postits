export const randomRange = (min, max, floored = false) => {
  return floored
    ? Math.floor(Math.random() * (max - min) + min)
    : Math.random() * (max - min) + min;
};
export const getDistance = (p1x, p1y, p2x, p2y) => {
  return Math.sqrt(Math.pow(p1x - p2x, 2) + Math.pow(p1y - p2y, 2));
};
