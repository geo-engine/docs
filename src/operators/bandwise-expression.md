# Bandwise Raster Expression

The `BandwiseExpression` operator performs a pixel-wise mathematical expression on each band of a raster source.
For more details on the expression syntax, see the [Expression](/operators/expressions.md) operator.
Note, that in the `BandwiseExpression` operator, it is only possible to map one pixel value to another and not reference any other pixels or bands.
The variable name for the pixel value is `x`.

## Parameters

| Parameter    | Type                                             | Description                                                                                                 | Example Value                   |
| ------------ | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `expression` | `Expression`                                     | Expression script                                                                                           | <pre><code>ln(1/x)</code></pre> |
| `outputType` | [`RasterDataType`](/datatypes/rasterdatatype.md) | A raster data type for the output                                                                           | <pre><code>U8</code></pre>      |
| `mapNoData`  | `bool`                                           | Should NO DATA values be mapped with the `expression`? Otherwise, they are mapped automatically to NO DATA. | <pre><code>false</code></pre>   |

## Inputs

The `Expression` operator expects a single raster input .

| Parameter | Type                 |
| --------- | -------------------- |
| `source`  | `SingleRasterSource` |

## Errors

The parsing of the expression can fail if there are, e.g., syntax errors.

## Example JSON

```json
{
  "type": "BandwiseExpression",
  "params": {
    "expression": "ln(1/x)",
    "outputType": "F32",
    "mapNoData": false
  },
  "sources": {
    "raster": {
      "type": "RasterStacker",
      "params": {},
      "sources": {
        "rasters": [
          {
            "type": "GdalSource",
            "params": {
              "data": "sentinel2-b8"
            }
          },
          {
            "type": "GdalSource",
            "params": {
              "data": "sentinel2-b4"
            }
          }
        ]
      }
    }
  }
}
```
