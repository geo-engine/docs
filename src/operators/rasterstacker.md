# RasterStacker

The `RasterStacker` stacks all of its inputs into a single raster time-series.
It does so by querying all of its inputs and outputting them by band, space and then time.
The output raster will have as many bands as the sum of all input bands.
The tiles are automatically temporally aligned.

All inputs must have the same data type and spatial reference.

## Parameters

_no parameters_

## Inputs

The `RasterStacker` operator supports up to 8 raster inputs.

| Parameter | Type                    |
| --------- | ----------------------- |
| `rasters` | `MultipleRasterSources` |

## Example JSON

```json
{
  "type": "RasterStacker",
  "params": {},
  "sources": {
    "rasters": [
      {
        "type": "GdalSource",
        "params": {
          "data": "ndvi"
        }
      },
      {
        "type": "Expression",
        "params": {
          "expression": "if A > 100 { A } else { 0 }",
          "outputType": "U8",
          "mapNoData": false
        },
        "sources": {
          "a": {
            "type": "GdalSource",
            "params": {
              "data": "ndvi"
            }
          }
        }
      }
    ]
  }
}
```
