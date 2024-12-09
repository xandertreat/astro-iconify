// Imports
import { HTMLAttributes } from "astro/types";
import Icon from './components/Icon.astro';

// Exports
export default Icon;
export type IconifySpecifierFormat = `${string}:${string}`;
export interface AstroIconifyAttributes extends HTMLAttributes<"svg"> {
  icon: IconifySpecifierFormat;
  color?: string;
  width?: number | "auto" | "unset" | "none";
  height?: number | "auto" | "unset" | "none";
  flip?: "horizontal" | "vertical" | "horizontal,vertical";
  rotate?: "90deg" | "180deg" | "270deg" | 1 | 2 | 3; // 1 = 90deg, 2 = 180deg, 3 = 270deg
  download?: boolean;
  box?: boolean;
}
