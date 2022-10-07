# Neighborhood Aggregate

The `NeighborhoodAggregate` operator computes an aggregate function for a pixel and its neighborhood.
The operator can be defined as a neighborhood matrix with either weights or predefined shapes and an aggregate function.

An example usage scenario is to calculate a Gaussian filter to smoothen or blur an image.
For each time step in the raster time series, the operator computes the aggregate for each pixel and its neighborhood.

The output data type is the same as the input data type.
As the matrix and the aggregate in- and outputs are defined as floating point values, the internal computation is done as floating point calculations.

## Parameters

| Parameter           | Type                | Description                               | Example Value                                                                                                                                                                                                                                          |
| ------------------- | ------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `neighborhood`      | `Neighborhood`      | Pixel neighborhood specification          | <pre><code>{<br>&nbsp;&nbsp;"type": "weightsMatrix",<br>&nbsp;&nbsp;"weights": [<br>&nbsp;&nbsp;&nbsp;&nbsp;[1.0, 2.0, 3.0],<br>&nbsp;&nbsp;&nbsp;&nbsp;[4.0, 5.0, 6.0],<br>&nbsp;&nbsp;&nbsp;&nbsp;[7.0, 8.0, 9.0]<br>&nbsp;&nbsp;]<br>}</code></pre> |
| `aggregateFunction` | `AggregateFunction` | An aggregate function for a set of values | <pre><code>"sum"</code></pre>                                                                                                                                                                                                                          |

## Types

The following describes the types used in the parameters.

### Neighborhood

There are several types of neighborhoods.
They define a matrix of weights.
The rows and columns of this matrix must be odd.

#### WeightsMatrix

The weights matrix is defined as an \\( n \times m \\) matrix of floating point values.
It is applied to the pixel and its neighborhood to serve as the input for the _aggregate function_.

For instance, a vertical derivative filter (a component of a Sobel filter) can be defined like this:

```json
{
  "type": "weightsMatrix",
  "weights": [
    [1.0, 0.0, -1.0],
    [2.0, 0.0, -2.0],
    [1.0, 0.0, -1.0]
  ]
}
```

The aggregate function should be `sum` in this case.

#### Rectangle

The rectangle neighborhood is defined by its shape \\( n \times m \\).
The result is a _weights matrix_ with all weights set to `1.0`.

```json
{
  "type": "rectangle",
  "dimensions": [3, 3]
}
```

### AggregateFunction

The aggregate function computes a single value from a set of values.
The following aggregate functions are supported:

- `sum`: The sum of all values
- `standardDeviation`: The standard deviation of all values.
  This ignores `NO DATA` values.

## Inputs

The `NeighborhoodAggregate` operator expects exactly one _raster_ input.

| Parameter | Type                 |
| --------- | -------------------- |
| `source`  | `SingleRasterSource` |

## Errors

If the neighborhood rows or columns are not positive or odd, an error will be thrown.

## Example JSON

```json
{
  "type": "NeighborhoodAggregate",
  "params": {
    "neighborhood": {
      "type": "weightsMatrix",
      "weights": [
        [1.0, 2.0, 3.0],
        [4.0, 5.0, 6.0],
        [7.0, 8.0, 9.0]
      ]
    },
    "aggregateFunction": "sum"
  },
  "sources": {
    "raster": {
      "type": "GdalSource",
      "params": {
        "data": {
          "type": "internal",
          "datasetId": "8d01593c-75c0-4ffa-8152-eabfe4430817"
        }
      }
    }
  }
}
```
