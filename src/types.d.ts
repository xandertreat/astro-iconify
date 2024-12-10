// Imports
import type { HTMLAttributes } from "astro/types";

// Type Definitions
export type IconifySpecifierFormat = `${string}:${string}`;
export type IconifySizeFormat = number | "auto" | "unset" | "none";
export type IconifyFlipFormat =
  | "horizontal"
  | "vertical"
  | "horizontal,vertical";
export type IconifyRotateFormat = "90deg" | 1 | "180deg" | 2 | "270deg" | 3; // "90deg" = 1, etc.
export interface IconifyAttributes extends HTMLAttributes<"svg"> {
  icon: IconifySpecifierFormat;
  color?: string;
  width?: IconifySizeFormat;
  height?: IconifySizeFormat;
  flip?: IconifyFlipFormat;
  rotate?: IconifyRotateFormat; // 1 = 90deg, 2 = 180deg, 3 = 270deg
  download?: boolean;
  box?: boolean;
}
export type IconifyAttributesKeys = Omit<
  IconifyAttributes,
  keyof HTMLAttributes<"svg">
>;
