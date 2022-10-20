import { IRandomColors } from "../styles/styleGuide";

export function getRandomColor(colorsObject: IRandomColors): string {
    const colorsObjectValues = Object.values(colorsObject);
    const numColors = colorsObjectValues.length;
    const randomNumber = Math.floor(Math.random() * numColors);
    return colorsObjectValues[randomNumber];
}
