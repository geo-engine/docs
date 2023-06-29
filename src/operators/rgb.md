# RGB Composite

The `RGB` composite operator computes pixel-wise rgba values on three raster sources, referred to as red, green, and blue.
They fill the red, green, and blue parts of the output, which are `U32` pixels, respectively.
Internally, the four bytes of the (unitless) `U32` are filled with red, green, blue and alpha information.
The special [`rgba`](../datatypes/colorizer.html#rgba) colorizer symbology treats the values "as is" and maps them to the RGB output.

## Parameters

| Parameter    | Type                | Description                                     | Example Value   |
| ------------ | ------------------- | ----------------------------------------------- | --------------- |
| `redMin`     | `number`            | Minimum value for red source                    | <pre>0</pre>    |
| `redMax`     | `number`            | Minimum value for red source                    | <pre>255</pre>  |
| `redScale`   | `number` (optional) | Scaling factor for the red source in `[0, 1]`   | <pre>1</pre>    |
| `greenMax`   | `number`            | Minimum value for green source                  | <pre>255</pre>  |
| `greenMin`   | `number`            | Minimum value for green source                  | <pre>0</pre>    |
| `greenScale` | `number` (optional) | Scaling factor for the green source in `[0, 1]` | <pre>0.5</pre>  |
| `blueMin`    | `number`            | Minimum value for blue source                   | <pre>0</pre>    |
| `blueMax`    | `number`            | Minimum value for blue source                   | <pre>255</pre>  |
| `blueScale`  | `number` (optional) | Scaling factor for the blue source in `[0, 1]`  | <pre>0.75</pre> |

## Inputs

The `RGB` composite operator expects three _raster_ inputs.

| Parameter | Type                 |
| --------- | -------------------- |
| `red`     | `SingleRasterSource` |
| `green`   | `SingleRasterSource` |
| `blue`    | `SingleRasterSource` |

## Errors

The parsing of the parameters can fail if, e.g., scale values are not in the range `[0, 1]`.

## Example JSON

```json
{
  "type": "Rgb",
  "params": {
    "redMin": 0,
    "redMax": 2000,
    "redScale": 1,
    "greenMin": 0,
    "greenMax": 2000,
    "greenScale": 1,
    "blueMin": 0,
    "blueMax": 2000,
    "blueScale": 1
  },
  "sources": {
    "red": {
      "type": "GdalSource",
      "params": {
        "data": "sentinel2-b2"
      }
    },
    "green": {
      "type": "GdalSource",
      "params": {
        "data": "sentinel2-b3"
      }
    },
    "blue": {
      "type": "GdalSource",
      "params": {
        "data": "sentinel2-b4"
      }
    }
  }
}
```
