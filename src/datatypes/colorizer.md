# Colorizer

A colorizer specifies a mapping between values and pixels/objects of an output image.
Different variants of colorizers perform different kinds of mapping.

Usually, there are three miscellaneous fields in each colorizer, namely `noDataColor`, `overColor` and `underColor`.
The field `noDataColor` is used for all missing, `NaN` or no data values.
The fields `overColor` and `underColor` are used for all overflowing values.
For instance, if there are breakpoints defined from `0` to `10`, but a value of `-5` or `11` is mapped to a color, the respective field will be chosen instead.
This way, you can specifically highlight values that lie outside of a given range.

Colors are defined as RGBA arrays, where the first three values refer to red, green and blue and the fourth one to alpha, which means transparency.
The values range from `0` to `255`.
For instance, `[255, 255, 255, 255]` is opaque white and `[0, 0, 0, 127]` is semi-transparent black.

## Linear Gradient

A linear gradient linearly interpolates values within breakpoints of a color table.

### Example JSON

```json
{
  "type": "linearGradient",
  "breakpoints": [
    {
      "value": 1.0,
      "color": [255, 255, 255, 255]
    },
    {
      "value": 2.0,
      "color": [0, 0, 0, 255]
    }
  ],
  "noDataColor": [0, 0, 0, 0],
  "overColor": [255, 0, 0, 255],
  "underColor": [0, 0, 255, 255]
}
```

## Logarithmic Gradient

A logarithmic gradient logarithmically interpolates values within breakpoints of a color table and allows only positive values.

### Errors

Services report errors that try to use a logarithmic gradient specification with values where `value <= 0`.

### Example JSON

```json
{
  "type": "logarithmicGradient",
  "breakpoints": [
    {
      "value": 1.0,
      "color": [255, 255, 255, 255]
    },
    {
      "value": 2.0,
      "color": [0, 0, 0, 255]
    }
  ],
  "noDataColor": [0, 0, 0, 0],
  "overColor": [255, 0, 0, 255],
  "underColor": [0, 0, 255, 255]
}
```

## Palette

A palette maps values as classes to a certain color.
Unmapped values result in the NO DATA color.

### Example JSON

```json
{
  "type": "palette",
  "colors": {
    "1": [255, 255, 255, 255],
    "2": [0, 0, 0, 255]
  },
  "noDataColor": [0, 0, 0, 0],
  "defaultColor": [0, 0, 0, 0]
}
```
