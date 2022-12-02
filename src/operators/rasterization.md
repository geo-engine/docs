# Rasterization

The `Rasterization` operator creates a raster from a point vector source.
It offers two options for rasterization: A grid rasterization and a (gaussian) density rasterization (heatmap).

## Inputs

The `Rasterization` operator expects exactly one _vector_ input.

| Parameter | Type                 |
|-----------|----------------------|
| `source`  | `SingleVectorSource` |

## Parameters
### Grid Rasterization

| Parameter           | Type                  | Description                                                | Example Value            |
|---------------------|-----------------------|------------------------------------------------------------|--------------------------|
| `spatialResolution` | `SpatialResolution`   | The spatial resolution of the grid/size of the grid cells. | `{"x": 10.0, "y": 10.0}` |
| `originCoordinate`  | `Coordinate2D`        | The origin coordinate to which the grid is aligned.        | `{"x": 0.0, "y": 0.0}`   |
| `gridSizeMode`      | `fixed` or `relative` | The mode how the grid resolution is interpreted.           | `"fixed"`                |

#### Types

The following describes the types used in the grid rasterization parameters.

The parameters `spatialResolution` and `originCoordinate` consist of two fields `x` and `y` which describe a resolution/position in x/y direction.

For `gridSizeMode` the two options `fixed` and `relative` are available.
`Fixed` means the `spatialResolution` is interpreted as a constant grid cell size. 
`Relative` means the `spatialResolution` is used as a multiplier for a query's spatial resolution, making the resulting grid size adaptive to the query resolution.

### Density Rasterization

| Parameter      | Type     | Description                                                                                                         | Example Value |
|----------------|----------|---------------------------------------------------------------------------------------------------------------------|---------------|
| `radius`       | `number` | Limits the distance (in coordinate units) to which a point is taken into account for an output pixel density value. | `1.0`         |
| `stddev`       | `number` | The standard deviation parameter for the gaussian function.                                                         | `1.0`         |

The `radius` is treated as a hard cutoff point. A smaller `radius` leads to faster processing, however it also introduces inaccuracies in the result since points further than `radius` away from a pixel do not influence its value.
It is meant to be set such that the ignored density values are small enough to not make a visible difference in the resulting raster.

#### Errors

If the `radius` is not strictly positive or the `stddev` is negative, an error will be thrown.

## Example JSON
### Grid Rasterization

```json
{
  "type": "Raster",
  "operator": {
    "type": "Rasterization",
    "params": {
      "gridOrDensity": {
        "type": "grid",
        "spatialResolution": {
          "x": 10,
          "y": 10
        },
        "gridSizeMode": "fixed",
        "originCoordinate": {
          "x": 0,
          "y": 0
        }
      }
    },
    "sources": {
      "vector": {
        "type": "OgrSource",
        "params": {
          "data": {
            "type": "internal",
            "datasetId": "a9623a5b-b6c5-404b-bc5a-313ff72e4e75"
          },
          "attributeProjection": null,
          "attributeFilters": null
        }
      }
    }
  }
}
```

### Density Rasterization

```json
{
  "type": "Raster",
  "operator": {
    "type": "Rasterization",
    "params": {
      "gridOrDensity": {
        "type": "density",
        "radius": 10,
        "stddev": 1
      }
    },
    "sources": {
      "vector": {
        "type": "OgrSource",
        "params": {
          "data": {
            "type": "internal",
            "datasetId": "a9623a5b-b6c5-404b-bc5a-313ff72e4e75"
          },
          "attributeProjection": null,
          "attributeFilters": null
        }
      }
    }
  }
}
```