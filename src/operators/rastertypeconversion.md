# RasterTypeConversion

The `RasterTypeConversion` operator allows change the data type of raster data.
It transforms all pixels into the new data type.

1. The operator allows loss of precision e.g. converting a `f32` value of "3.1" to a `u8` will return a value of "3".

2. If the old value is not valid in the new type it will clip at the value range of the new type.

## Parameters

| Parameter | Type                     | Description                  | Example Value         |
| --------- | ------------------------ | ---------------------------- | --------------------- |
| `outputDataType` | [`RasterDataType`]| the output type              | "U8"                  |

The `RasterTypeConversion` operator expects either one _raster_ input.

| Parameter | Type                         |
| --------- | ---------------------------- |
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
