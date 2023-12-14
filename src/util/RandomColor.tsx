export function getRandomHexColor() {
  const hexChars: string = "0123456789ABCDEF";
  let hexColor: string = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    hexColor += hexChars.charAt(randomIndex);
  }

  return hexColor;
}
