# Raster Kernel

The `RasterKernel` operator computes a rectangular kernel for a pixel and its neighborhood.
The operator can be defined as a matrix kernel with weights or as specialized kernel types, where only the size is specified.

An example usage scenario is to calculate a Sobel filter to detect contours within an image.
For each time step in the raster time series, the operator computes the kernel for each pixel and its neighborhood.

The output data type is the same as the input data type.
As kernels are defined as floating point values, the internal computation is done as floating point calculations.

## Parameters

| Parameter | Type     | Description                 | Example Value                                                                                                                                                                                                                                       |
| --------- | -------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kernel`  | `Kernel` | Raster kernel specification | <pre><code>{<br>&nbsp;&nbsp;"type": "convolution",<br>&nbsp;&nbsp;"matrix": [<br>&nbsp;&nbsp;&nbsp;&nbsp;[1.0, 2.0, 3.0],<br>&nbsp;&nbsp;&nbsp;&nbsp;[4.0, 5.0, 6.0],<br>&nbsp;&nbsp;&nbsp;&nbsp;[7.0, 8.0, 9.0]<br>&nbsp;&nbsp;]<br>}</code></pre> |

## Types

The following describes the types used in the parameters.

### Kernel

There are two types of kernels: _Convolution_ and _Standard Deviation_.
Note that the number of rows and columns must be always odd.

#### Convolution

The convolution kernel is defined as a symmetrical \\( n \times m \\) matrix of floating point values.
It is applied to the pixel and its neighborhood to compute the output value.
The application can be seen as a weighted sum of the pixel values in the neighborhood: \\[ out(x, y) = \sum_{i=0..n} \sum_{j=0..m} kernel(i, j) * in(x - \frac{n}{2} + i,y - \frac{m}{2} + j) \\]

For instance, a sobel filter can be defined like this:

```json
{
  "type": "convolution",
  "matrix": [
    [1.0, 0.0, -1.0],
    [2.0, 0.0, -2.0],
    [1.0, 0.0, -1.0]
  ]
}
```

#### Standard Deviation

The standard deviation kernel is defined by its shape \\( n \times m \\).
For each pixel, the kernel is applied to the neighborhood and the standard deviation is computed.

For instance, a \\( 3 \times 3\\) neighborhood is defined as follows:

```json
{
  "type": "standardDeviation",
  "dimensions": [3, 3]
}
```

## Inputs

The `RasterKernel` operator expects exactly one _raster_ input.

| Parameter | Type                 |
| --------- | -------------------- |
| `source`  | `SingleRasterSource` |

## Errors

If the number of rows or columns in the kernel matrix are not odd or zero, an error will be thrown.

## Example JSON

```json
{
  "type": "RasterKernel",
  "params": {
    "kernel": {
      "type": "convolution",
      "matrix": [
        [1.0, 2.0, 3.0],
        [4.0, 5.0, 6.0],
        [7.0, 8.0, 9.0]
      ]
    }
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
