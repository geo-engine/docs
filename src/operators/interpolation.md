# Interpolation

The `Interpolation` operator artificially increases the resolution of a raster by interpolating the values of the input raster.
If the operator is queried with a resolution that is coarser than the input resolution, the interpolation is not applied but the input raster is returned unchanged.
Unless a particular input resolution is specified, the resolution of the input raster is used, if it is known.

## Parameters

| Parameter         | Type                  | Description                                  | Example Value     |
| ----------------- | --------------------- | -------------------------------------------- | ----------------- |
| `interpolation`   | `InterpolationMethod` | the interpolation method to be used          | "nearestNeighbor" |
| `inputResolution` | `InputResolution`     | the query resolution for the source operator | "native"          |

## Types

The following describes the types used in the parameters.

### InterpolationMethod

The operator supports the following interpolation methods:

| Value             | Description                                      |
| ----------------- | ------------------------------------------------ |
| `nearestNeighbor` | The value of the nearest neighbor is used.       |
| `biLinear`        | The value is computed by bilinear interpolation. |

### InputResolution

The operator supports the following input resolutions:

| Value                                   | Description                                 |
| --------------------------------------- | ------------------------------------------- |
| `{"type": "native}`                     | The resolution of the input raster is used. |
| `{"type": "value", "x": 0.1, "y": 0.1}` | The resolution is specified explicitly.     |

## Inputs

The `Interpolation` operator expects exactly one _raster_ input.

| Parameter | Type                 |
| --------- | -------------------- |
| `source`  | `SingleRasterSource` |

## Errors

If the input resolution is set as "native" but the resolution of the input raster is not known, an error will be thrown.

## Example JSON

```json
{
  "type": "Raster",
  "operator": {
    "type": "Interpolation",
    "params": {
      "interpolation": "biLinear",
      "inputResolution": {
        "type": "native"
      }
    },
    "sources": {
      "raster": {
        "type": "GdalSource",
        "params": {
          "data": {
            "type": "internal",
            "datasetId": "36574dc3-560a-4b09-9d22-d5945f2b8093"
          }
        }
      }
    }
  }
}
```
