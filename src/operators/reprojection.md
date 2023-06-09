# Reprojection

The `Reprojection` operator reprojects data from one spatial reference system to another.
It accepts exactly one input which can either be a raster or a vector data stream.
The operator produces all data that, after reprojection, is contained in the query rectangle.

## Data type specifics

The concrete behavior depends on the data type.

### Vector data

The reprojection operator reprojects all coordinates of the features individually.
The result contains all features that, after reprojection, are _intersected_ by the query rectangle.
If not all coordinates of the vector data stream could be projected, the operator returns an error.

### Raster data

To create tiles in the target projection, the operator first loads the corresponding tiles in the source projection.
Note, that in order to create one reprojected output tile, it may be necessary to load multiple source tiles.
For each output pixel, the operator takes the value of the input pixel nearest to its upper left corner.

In order to obtain precise results but avoid loading too much data, the operators estimate the resolution in which it loads the input raster stream.
The estimate is based on the target resolution defined by the query rectangle and the relationship between the length of the diagonal of the query rectangle in both projections.
Please refer to the source code for details.

In case a tile, or part of a tile, is not available in the source projection because it is outside of the defined extent, the operator will produce pixels with _no data_ values.
If the input raster stream has no _no data_ value defined, the value _0_ will be used instead.

## Parameters

| Parameter                | Type     | Description                                                        | Example Value |
| ------------------------ | -------- | ------------------------------------------------------------------ | ------------- |
| `targetSpatialReference` | `String` | The srs string (_authority:code_) of the target spatial reference. | `EPSG:4326`   |

## Inputs

The `Reprojection` operator expects exactly one _raster_ or _vector_ input.

| Parameter | Type                     |
| --------- | ------------------------ |
| `source`  | `RasterOrVectorOperator` |

## Errors

The operator returns an error if the target projection is unknown or if the input data cannot be reprojected.

## Example JSON

```json
{
  "type": "Reprojection",
  "params": {
    "targetSpatialReference": "EPSG:4326"
  },
  "sources": {
    "source": {
      "type": "GdalSource",
      "params": {
        "data": "ndvi"
      }
    }
  }
}
```
