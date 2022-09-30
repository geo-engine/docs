# RasterScaling

The raster scaling operator scales/unscales the values of a raster by a given scale factor and offset.
This allows to shrink and expand the value range of the pixel values needed to store a raster. It also allows to shift values to all-positive values and back. Keep in mind that scaling reduces the precision of the pixel values. We use the [GDAL](https://gdal.org/index.html) terms of [scale](https://gdal.org/programs/gdal_translate.html#cmdoption-gdal_translate-scale) and [unscale](https://gdal.org/programs/gdal_translate.html#cmdoption-gdal_translate-unscale). Scaling is often used to reduce memory consumption of rasters. Unscaling calculates the "real" value of each stored pixel.

This is done by applying the following formulas to every pixel.

For _unscaling_ the formula is: `p_new = p_old * slope + offset`.

For _scaling_ the formula is: `p_new = (p_old - offset) / slope`

`p_old` and `p_new` refer to the old and new pixel value. The slope and offset values are either properties attached to the input raster or a fixed value.

An example for Meteosat Second Generation properties is:

- offset: `msg.calibration_offset`
- slope: `msg.calibration_slope`

## Parameters

| Parameter           | Type                                                  | Description                                          | Example Value |
| ------------------- | ----------------------------------------------------- | ---------------------------------------------------- | ------------- |
| `scaleWith`         | `MetadataKeyOrConstant`                               | the                                                  | "U8"          |
| `offsetBy`          | `MetadataKeyOrConstant`                               | the output type                                      | "U8"          |
| `scalingMode`       | `scale` OR `unscale`                                  | select scale or unscale mode                         | "U8"          |
| `outputMeasurement` | (optional) [`Measurement`](/datatypes/measurement.md) | the measurement of the data produced by the operator | "U8"          |

The `RasterScaling` operator expects exactly one _raster_ input.

| Parameter | Type                 |
| --------- | -------------------- |
| `source`  | `SingleRasterSource` |

## Types

The following describes the types used in the parameters.

### MetadataKeyOrConstant

The `MetadataKeyOrConstant` type is used to specify a metadata key or a constant value.

| Value                                                      | Description                                                            |
| ---------------------------------------------------------- | ---------------------------------------------------------------------- |
| `{"type": "constant", "value": number}`                    | A constant value.                                                      |
| `{"type": "metadataKey", "domain": string, "key": string}` | A metadata key to lookup dynamic values from raster (tile) properties. |

## Example JSON

```json
{
  "type": "RasterScaling",
  "params": {
    "scaleWith": {
      "type": "metadataKey",
      "domain": "",
      "key": "scale"
    },
    "offsetBy": {
      "type": "value",
      "value": 1.0
    },
    "outputMeasurement": null,
    "scalingMode": "scale"
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
