# RasterTypeConversion

The `RasterTypeConversion` operator allows changing the data type of raster data.
It transforms all pixels into the new data type.

1. Applying the operator could lead to a loss of precision, e.g., converting a `F32` value of `3.1` to a `U8` will return a value of `3`.

2. If the old value is not valid in the new type it will clip at the value range of the new type. E.g., converting a `F32` value of `300.0` to a `U8` will return a value of `255`.

## Parameters

| Parameter        | Type               | Description     | Example Value |
| ---------------- | ------------------ | --------------- | ------------- |
| `outputDataType` | [`RasterDataType`] | the output type | "U8"          |

The `RasterTypeConversion` operator expects exactly one _raster_ input.

| Parameter | Type                 |
| --------- | -------------------- |
| `source`  | `SingleRasterSource` |

## Example JSON

```json
{
  "type": "RasterTypeConversion",
  "params": {
    "outputDataType": "U8"
  },
  "sources": {
    "source": {
      "type": "GdalSource",
      "params": {
        "data": {
          "type": "internal",
          "datasetId": "00000000-0000-0000-0000-000000000539"
        }
      }
    }
  }
}
```
