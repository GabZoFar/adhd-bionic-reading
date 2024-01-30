# ADHD Bionic Reading Converter

This JavaScript app boldens the first letters of words within a text, based on word length. 
It is designed to help with focus and reading speed.
Simply paste any long text you want to convert to bionic reading.

## Installation

No installation is required for this utility as it is a plain JavaScript function intended to be used directly in the browser.

## Usage

1. Clone or dowload repo
2. Open index.html in any browser or publish to netlify/static hosting provider to try it out!

Working demo: https://adhd-bionic-reading.vercel.app/

## Function Reference

#### `boldenText()`

This function takes no parameters. It reads the value from a textarea with the id `input`, processes the text, and outputs the boldened text into an element with the id `output`.

The boldening rules are as follows:
- If a word is longer than 6 characters, the first 4 characters are boldened.
- If a word is 6 characters or shorter, the first 3 characters are boldened.

The function does not return any value as it directly manipulates the DOM.

Enjoy!
