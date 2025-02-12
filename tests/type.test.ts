import { describe, test, expect } from 'vitest';
import validateIconSpecifier from '../src/guard';

describe('validateIconProp', () => {
  // Invalid collections + icons
  test.each([
    ['mdi-light-home', 'Invalid Iconify icon specifier.'], // Missing colon
    ['FA-SOLID:USER', 'Invalid Iconify icon specifier.'], // Uppercase
    ['FA-SOLID:user', 'Invalid Iconify icon specifier.'], // Uppercase
    ['fa-solid:USER', 'Invalid Iconify icon specifier.'], // Uppercase
    ['carbon-chart-line:', 'Invalid Iconify icon specifier.'], // Ends with colon
    [':material-symbols:bookmark', 'Invalid Iconify icon specifier.'], // Starts with colon
    ['carbon chart-line', 'Invalid Iconify icon specifier.'], // Space instead of colon
    ['material-symbols:bookmark!', 'Invalid Iconify icon specifier.'], // Special character
    ['mater!al-symbols:bookmark', 'Invalid Iconify icon specifier.'], // Special character
    ['-carbon:bookmark', 'Invalid Iconify icon specifier.'], // Starts with dash before colon
    ['carbon:-bookmark', 'Invalid Iconify icon specifier.'], // Dash after colon
    ['carbon:book_mark', 'Invalid Iconify icon specifier.'], // Underscore
    ['', 'Invalid Iconify icon specifier.'], // Empty string
    ['a:b-', 'Invalid Iconify icon specifier.'], // Dash at the end
    ['a--b:b--c', 'Invalid Iconify icon specifier.'], // Double hyphens
    ['a--b:b-c', 'Invalid Iconify icon specifier.'], // Double hyphens
    ['a-b:b--c', 'Invalid Iconify icon specifier.'], // Double hyphens
    ['a-b:c-d-', 'Invalid Iconify icon specifier.'], // Dash at the end of both parts
    ['a:b-', 'Invalid Iconify icon specifier.'], // Dash at the end
    ['a-:b-', 'Invalid Iconify icon specifier.'], // Dash at the end
  ])('should throw for invalid icon specifier %p', (prop, expectedMessage) => {
    expect(() => {
      validateIconSpecifier(prop);
    }).toThrowError(expectedMessage);
  });

  // Test for non-string inputs
  test.each([
    [123, 'Invalid Iconify icon specifier.'], // Number
    [null, 'Invalid Iconify icon specifier.'], // Null
    [undefined, 'Invalid Iconify icon specifier.'], // Undefined
    [{}, 'Invalid Iconify icon specifier.'], // Object
    [true, 'Invalid Iconify icon specifier.'], // Boolean
  ])('should throw for non-string input %p', (prop, expectedMessage) => {
    expect(() => {
      validateIconSpecifier(prop);
    }).toThrowError(expectedMessage);
  });

  // Valid collections + icons
  test.each([
    'mdi-light:home',
    'fa-solid:user',
    'carbon:chart-line',
    'material-symbols:bookmark',
    'a:b', // Minimum valid case
    'a-b:c-d', // With dashes
    'a0:b0', // With numbers
    'a0b:c0d', // Mixed alphanumeric
    'a-b-c:d-e-f', // Multiple dashes in both parts
    'a1b2c3:d4e5f6', // More complex with numbers
  ])('should not throw for valid icon specifier %p', (prop) => {
    expect(() => {
      validateIconSpecifier(prop);
    }).not.toThrow();
  });
});
