# Band Neighborhood

The `BandNeigbhoorhood` operator performs a pixel-wise aggregate function over the neighboring bands.
The output is a raster time-series with the same number of bands as the input raster.
The pixel values are replaced by the result of the aggregate function.
This allows e.g. the computation of a moving average over the bands of a raster time-series.

## Parameters

| Parameter   | Type                    | Description        | Example Value                          |
| ----------- | ----------------------- | ------------------ | -------------------------------------- |
| `aggregate` | `NeighborhoodAggregate` | The aggrate method | `{"type": "average", "windowSize": 3}` |

## Types

The following describes the types used in the parameters.

### NeighborhoodAggregate

There are several types of neighborhood aggregate functions.

#### Average

This aggregate function computes the average of the neighboring bands.
The `windowSize` parameter defines the number of bands to consider for the average and must be an odd number.
For the borders, the window is reduced to the available bands.

##### Example

```json
{
  "type": "average",
  "windowSize": 3
}
```

#### FirstDerivative

This aggregate function computes and approximation of the first derivative of the neighboring bands using the central difference method.
Given the bands \\( x_i \\) and the pixel value \\( y_i \\) the derivative is computed as

\\[ f′(x_i​) \approx \frac{​y_{i+1} ​ − y_{i−1​​}}{x_{i+1}​ − x_{i−1}} \\]

and forward/backward difference for the endpoints

\\[ f′(x_1​) ≈ \frac{y_2 - y_1}{x_2 - x_1} \\]

\\[ f′(x_n​) ≈ \frac{y_n - y_{n-1}}{x_n - x_{n-1}} \\]

To compute the distance \\( x_{i+1}​ − x_{i−1} \\), a `bandDistance` parameter is required.

##### BandDistance

The `bandDistance` parameter defines the distance between the bands.
Currently, the band distance is assumed to be constant and can be specified in the following way:

```json
{
  "type": "bandDistance",
  "distance": 1.0
}
```

#### Example

```json
{
  "type": "firstDerivative",
  "bandDistance": {
    "type": "equallySpaced",
    "distance": 1.0
  }
}
```

## Inputs

The `BandNeigbhoorhood` operator expects a single raster input .

| Parameter | Type                 |
| --------- | -------------------- |
| `source`  | `SingleRasterSource` |

## Errors

The operation fails if there are not enough bands in the input raster to compute the aggregate function or the number of bands does not match the requirements of the aggregate function.

## Example JSON

```json
{
  "type": "BandNeighborhood",
  "params": {
    "type": "average",
    "windowSize": 3
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
          },
          {
            "type": "GdalSource",
            "params": {
              "data": "sentinel2-b2"
            }
          }
        ]
      }
    }
  }
}
```
