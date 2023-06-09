# Rasterization

The `Rasterization` operator creates a raster from a point vector source.
It offers two options for rasterization: A grid rasterization and a (gaussian) density rasterization (heatmap).

## Inputs

The `Rasterization` operator expects exactly one _vector_ input.

| Parameter | Type                 |
|-----------|----------------------|
| `source`  | `SingleVectorSource` |

## Parameters
| Parameter | Type                  | Description                                               | Example Value           |
|-----------|-----------------------|-----------------------------------------------------------|-------------------------|
| `params`  | `GridOrDensity`       | The type and parameters for the rasterization to perform. | `{"type": "grid", ...}` |

`GridOrDensity` contains a field `type` which can have the value `grid` or `density` for a grid rasterization or density rasterization, respectively.

`GridOrDensity` has additional fields which are parameters specific to the type of the rasterization. These are described below separately.

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

| Parameter | Type     | Description                                                                                                                         | Example Value |
|-----------|----------|-------------------------------------------------------------------------------------------------------------------------------------|---------------|
| `cutoff`  | `number` | Defines the cutoff (as percentage of maximum density) down to which a point is taken into account for an output pixel density value | `0.01`        |
| `stddev`  | `number` | The standard deviation parameter for the gaussian function.                                                                         | `1.0`         |

The `cutoff` percentage (must be in [0, 1)) is treated as a hard cutoff point. A larger `cutoff` percentage leads to faster processing, however it also introduces inaccuracies in the result since points further than the derived radius away from a pixel do not influence its value.
It is meant to be set such that the ignored density values are small enough to not make a visible difference in the resulting raster.

#### Errors

If the `cutoff` is not in [0, 1) or the `stddev` is negative, an error will be thrown.

## Example JSON
### Grid Rasterization

```json
{
  "type": "Raster",
  "operator": {
    "type": "Rasterization",
    "params": {
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
    },
    "sources": {
      "vector": {
        "type": "OgrSource",
        "params": {
          "data": "ne_10m_ports",
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
      "type": "density",
      "cutoff": 0.01,
      "stddev": 1
    },
    "sources": {
      "vector": {
        "type": "OgrSource",
        "params": {
          "data": "ne_10m_ports",
          "attributeProjection": null,
          "attributeFilters": null
        }
      }
    }
  }
}
```