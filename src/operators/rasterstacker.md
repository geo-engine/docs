# RasterStacker

The `RasterStacker` stacks all of its inputs into a single raster time-series.
It does so by querying all of its inputs and outputting them by band, space and then time.
The output raster will have as many bands as the sum of all input bands.
The tiles are automatically temporally aligned.

All inputs must have the same data type and spatial reference.

## Parameters

| Parameter   | Type          | Description                                                 | Example Value                          |
| ----------- | ------------- | ----------------------------------------------------------- | -------------------------------------- |
| renameBands | `RenameBands` | Specification of how to rename the bands to avoid conflicts | <pre><code>{ "type": "default" }</pre> |

## Types

The following describes the types used in the parameters.

### RenameBands

The `RenameBands` type is used to specify how to rename the bands to avoid conflicts.

| Value                                    | Description                                                                         |
| ---------------------------------------- | ----------------------------------------------------------------------------------- |
| `{"type": "default"}`                    | Appends " (n)" to the band name with the smallest `n` that avoids a conflict        |
| `{"type": "suffix", "values": [string]}` | Specifies a suffix for each input, to be appended to the band names                 |
| `{"type": "rename", "values": [string]}` | A list of names for each band of all inputs to be used instead of the original name |

## Inputs

The `RasterStacker` operator supports up to 8 raster inputs.

| Parameter | Type                    |
| --------- | ----------------------- |
| `rasters` | `MultipleRasterSources` |

## Example JSON

```json
{
  "type": "RasterStacker",
  "params": {
    "renameBands": {
      "type": "rename",
      "values": ["ndvi", "ndvi_masked"]
    }
  },
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
