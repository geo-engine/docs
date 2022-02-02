# Raster Expression

The `Expression` operator performs a pixel-wise mathematical expression on one or more raster sources.
The expression is specified as a user-defined script in a very simple language.
The output is a raster time series with the result of the expression and with time intervals that are the same as for the inputs.
Users can specify an output data type.
Internally, the expression is evaluated using floating-point numbers.

An example usage scenario is to calculate NDVI for a red and a near-infrared raster channel.
The expression uses two raster sources, referred to as A and B, and calculates the formula `(A - B) / (A + B)`.
When the temporal resolution is months, our output NDVI will also be a monthly time series.

## Parameters

| Parameter           | Type                                             | Description                                                                                                 | Example Value                                                                                            |
| ------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `expression`        | `Expression`                                     | Expression script                                                                                           | <pre><code>(A - B) / (A + B)</code></pre>                                                                |
| `outputType`        | [`RasterDataType`](/datatypes/rasterdatatype.md) | A raster data type for the output                                                                           | <pre><code>U8</code></pre>                                                                               |
| `outputNoDataValue` | `Number`                                         | NO DATA value for the output                                                                                | <pre><code>-2</code></pre>                                                                               |
| `outputMeasurement` | [`Measurement`](/datatypes/measurement.md)       | Description about the output                                                                                | <pre><code>{<br>&nbsp;&nbsp;"type": "continuous",<br>&nbsp;&nbsp;"measurement": "NDVI"<br>}</code></pre> |
| `mapNoData`         | `Boolean`                                        | Should NO DATA values be mapped with the `expression`? Otherwise, they are mapped automatically to NO DATA. | <pre><code>false</code></pre>                                                                            |

## Types

The following describes the types used in the parameters.

### Expression

Expressions are simple scripts to perform pixel-wise computations.
One can refer to the raster inputs as `A` for the first raster, `B` for the second, and so on.
Furthermore, expressions can check with `A IS NODATA`, `B IS NODATA`, etc for NO DATA values.
This is important if `mapNoData` is set to true.
Otherwise, NO DATA values are mapped automatically to the output NO DATA value.
Finally, the value `out_nodata` can be used to output NO DATA.

Users can basically think of this implicit function signature for, e.g., two inputs:

```Rust
fn (A: f64, B: f64, out_nodata: f64) -> f64
```

As a start, expressions contain algebraic operations and mathematical functions.

```Rust
(A + B) / 2
```

In addition, branches can be used to check for conditions.

```Rust
if A IS NODATA {
    B
} else {
    A
}
```

Function calls can be used to access utility functions.

```Rust
max(A, 0)
```

Currently, the following functions are available:

- `abs(a)`: absolute value
- `min(a, b)`, `min(a, b, c)`: minimum value
- `max(a, b)`, `max(a, b, c)`: maximum value
- `sqrt(a)`: square root
- `ln(a)`: natural logarithm
- `log10(a)`: base 10 logarithm
- `cos(a)`, `sin(a)`, `tan(a)`, `acos(a)`, `asin(a)`, `atan(a)`: trigonometric functions
- `pi()`, `e()`: mathematical constants
- `round(a)`, `ceil(a)`, `floor(a)`: rounding functions
- `mod(a, b)`: division remainder
- `to_degrees(a)`, `to_radians(a)`: conversion to degrees or radians

To generate more complex expressions, it is possible to have variable assignments.

```Rust
let mean = (A + B) / 2;
let coefficient = 0.357;
mean * coefficient
```

Note, that all assignments are separated by semicolons.
However, the last expression must be without semicolon.

## Inputs

The `Expression` operator expects one to eight _raster_ inputs.

| Parameter | Type                 |
| --------- | -------------------- |
| `A`       | `SingleRasterSource` |
| `B`       | `SingleRasterSource` |
| `C`       | `SingleRasterSource` |
| …         | `SingleRasterSource` |

## Errors

The parsing of the expression can fail if there are, e.g., syntax errors.

## Example JSON

```json
{
  "type": "Expression",
  "params": {
    "expression": "(A - B) / (A + B)",
    "outputType": "F32",
    "outputNoDataValue": "NAN",
    "mapNoData": false
  },
  "sources": {
    "A": {
      "type": "GdalSource",
      "params": {
        "dataset": {
          "type": "internal",
          "datasetId": "a626c880-1c41-489b-9e19-9596d129859c"
        }
      }
    },
    "B": {
      "type": "GdalSource",
      "params": {
        "dataset": {
          "type": "internal",
          "datasetId": "699b9e14-4bd6-4d57-889a-58f60288b19c"
        }
      }
    }
  }
}
```
