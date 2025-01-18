import { IconifySpecifierFormat } from "~/types";

function validateIconSpecifier(iconSpecifier: string): iconSpecifier is IconifySpecifierFormat {
  return typeof iconSpecifier === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*:[a-z0-9]+(?:-[a-z0-9]+)*$/.test(iconSpecifier);
};

export default function validateIconProp(prop: any): void {
    if (!validateIconSpecifier(prop))
        throw new Error("Invalid Iconify icon specifier.");
};