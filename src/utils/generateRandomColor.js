export const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);

  const hsl = `hsl(${hue}, 50%, 85%)`;

  return hsl;
};
