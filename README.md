# @xtreat/astro-iconify

A type-safe, lightweight Astro component for seamless Iconify Icon integration in SVG format, providing flexible styling and transformation options. Created by Xander Treat.

[![Meta-Framework](https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![npm version](https://badge.fury.io/js/@xtreat%2Fastro-iconify.svg)](https://badge.fury.io/js/@xtreat%2Fastro-iconify)
[![npm downloads](https://img.shields.io/npm/dm/@xtreat/astro-iconify.svg)](https://www.npmjs.com/package/@xtreat/astro-iconify)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@xtreat/astro-iconify.svg)](https://bundlephobia.com/package/@xtreat/astro-iconify)\
[![GitHub issues](https://img.shields.io/github/issues/xandertreat/astro-iconify.svg)](https://github.com/xandertreat/astro-iconify/issues)
[![Maintenance](https://img.shields.io/maintenance/yes/2024.svg)](https://github.com/xandertreat/astro-iconify)
[![GitHub stars](https://img.shields.io/github/stars/xandertreat/astro-iconify.svg)](https://github.com/xandertreat/astro-iconify/stargazers)\
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Installation

#### npm

```bash
npm install @xtreat/astro-iconify
```

#### pnpm

```bash
pnpm install @xtreat/astro-iconify
```

#### yarn

```bash
yarn add @xtreat/astro-iconify
```

#### bun

```bash
bun install @xtreat/astro-iconify
```

#### deno

```bash
deno install npm:@xtreat/astro-iconify
```

## Usage

Icons are specified using the Iconify Icon syntax:
`collection-name:icon-name`

### Example:

Importing the component:

```Astro
import Icon from "@xtreat/astro-iconify";
```

Using it:

```Astro
<Icon icon="ic:baseline-all-inclusive" />
```

It supports any HTML attributes a SVG element can have:

```Astro
---
import Icon from "@xtreat/astro-iconify";
---

<Icon class="icon-class-here" xmlns="http://www.w3.org/1999/svg" role="img" icon="ic:baseline-all-inclusive" />
```

## Props Reference

The component supports the following props:

| Property   | Type                                                           | Required | Description                                                      |
| ---------- | -------------------------------------------------------------- | -------- | ---------------------------------------------------------------- |
| `icon`     | `string:string`<br>                                   | ✔️       | Specifies collection and icon being used                         |
| `color`    | `string`                                                       | ❌       | Color of the icon.<br> Results in hardcoded palette              |
| `width`    | `number` <br> `"auto"` <br> `"unset"` <br> `"none"`            | ❌       | Width of icon.<br> Serves as `height` if `height` is unspecified |
| `height`   | `number` <br> `"auto"` <br> `"unset"` <br> `"none"`            | ❌       | Height of icon.<br> Serves as `width` if `width` is unspecified  |
| `flip`     | `"horizontal"` <br> `"vertical"` <br> `"horizontal,vertical"`  | ❌       | Flipping icon in either axis or both                             |
| `rotate`   | `"90deg"` or `1` <br> `"180deg"` or `2` <br> `"270deg"` or `3` | ❌       | Rotation of icon                                                 |
| `download` | `boolean`                                                      | ❌       | Whether or not browser should be forced to download file         |
| `box`      | `boolean`                                                      | ❌       | Adds an empty rectangle to the SVG that matches `viewBox`        |

## Type Reference

If needed, types can be used and imported via `@xtreat/astro-iconify/types` :
```typescript
import { IconifyAttributes } from '@xtreat/astro-iconify/types'
```
A list of all provided types and their descriptions below:

### `IconifyAttributes`

```typescript
interface IconifyAttributes extends HTMLAttributes<"svg">
```

Specifies all possible attributes / props for an Astro Iconify component

### `IconifyAttributesKeys`

```typescript
type IconifyAttributesKeys = Omit<IconifyAttributes, keyof HTMLAttributes<"svg">>;
```

Specifies keys specific to the Astro Iconify component

### `IconifySpecifierFormat`

```typescript
type IconifySpecifierFormat = `${string}:${string}`
```

Specifies the necessary format given by the Iconify API to specify the collection and contained icon

### `IconifySizeFormat`

```typescript
type IconifySizeFormat = number | "auto" | "unset" | "none"
```

Specifies the necessary format given by the Iconify API to specify size dimensions if desired

### `IconifyFlipFormat`

```typescript
export type IconifyFlipFormat = "horizontal" | "vertical" | "horizontal,vertical"
```

Specifies the necessary format given by the Iconify API to specify a two-dimensional axial flip if desired

### `IconifyRotateFormat`

```typescript
type IconifyRotateFormat = "90deg" | 1 | "180deg" | 2 | "270deg" | 3
```

Specifies the necessary format given by the Iconify API to specify the SVG's rotation

## Contributing

Contributions are welcome!\
Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/xandertreat/astro-iconify
cd astro-iconify
npm install
```

## Links

[npm Package](https://www.npmjs.com/package/@xtreat/astro-iconify)\
[GitHub Repository](https://github.com/xandertreat/astro-iconify)

## License

This project is licensed under the [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0.html)
