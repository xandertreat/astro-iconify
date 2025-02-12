import type { IconifySpecifierFormat } from "./types.d.ts";

// Type guard
export default function validateIconSpecifier(
  iconSpecifier: string
): iconSpecifier is IconifySpecifierFormat {
  if (
    !(
      typeof iconSpecifier === "string" &&
      /^[a-z0-9]+(?:-[a-z0-9]+)*:[a-z0-9]+(?:-[a-z0-9]+)*$/.test(iconSpecifier)
    )
  )
    throw new Error("Invalid Iconify icon specifier.");

  return true;
}
