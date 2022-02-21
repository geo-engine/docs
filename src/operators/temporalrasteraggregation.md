# TemporalRasterAggregation

The `TemporalRasterAggregation` aggregates a raster time series into uniform time intervals.
The output is a time series that begins at the `start` of the query time.
Each time slice has the same length, defined by the `window` parameter.
The pixel values are computed by aggregating all rasters contained in the input that are valid in the current window using the defined `aggregation` method.
All output slices that are contained in the query time interval are produced by the operator.

An example usage scenario is to transform a daily raster time series into monthly aggregates.
Here, the query should start at the beginning of the month and the window should be 1 month.
The aggregation method allows calculating, e.g., the maximum or mean value for each pixel.
If we perform a query with time [2021-01-01, 2021-04-1), we would get a time series with three time steps.
If we perform a query with an instant like [2021-01-01, 2021-01-1), we will get a single time step containing the aggregated values for January 2021.

## Parameters

| Parameter     | Type                                 | Description                   | Example Value                                                                                     |
| ------------- | ------------------------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------- |
| `aggregation` | `Aggregation`                        | method for aggregating pixels | <pre><code>{<br>&nbsp;&nbsp;"type": "max",<br>&nbsp;&nbsp;"ignoreNoData": false<br>}</code></pre> |
| `window`      | [`TimeStep`](/datatypes/timestep.md) | length of time steps          | <pre><code>{<br>&nbsp;&nbsp;"granularity": "Months",<br>&nbsp;&nbsp;"step": 1<br>}</code></pre>   |

## Types

The following describes the types used in the parameters.

### Aggregation

There are different methods that can be used to aggregate the raster time series.
Encountering a _no data_ value makes the aggregation value of a pixel also _no data_, unless the `ignoreNoData` parameter is set to `true`.

| Variant | Parameters             | Description             |
| ------- | ---------------------- | ----------------------- |
| `min`   | `ignoreNoData`: `bool` | minimum value           |
| `max`   | `ignoreNoData`: `bool` | maximum value           |
| `first` | `ignoreNoData`: `bool` | first encountered value |
| `last`  | `ignoreNoData`: `bool` | last encountered value  |
| `mean`  | `ignoreNoData`: `bool` | mean value              |

## Inputs

The `TemporalRasterAggregation` operator expects exactly one _raster_ input.

| Parameter | Type                 |
| --------- | -------------------- |
| `raster`  | `SingleRasterSource` |

## Errors

If the aggregation method is `first`, `last` or `mean` and the input raster has no _no data_ value, an error is thrown.

## Example JSON

```json
{
  "type": "TemporalRasterAggregation",
  "params": {
    "aggregation": {
      "type": "max",
      "ignoreNoData": false
    },
    "window": {
      "granularity": "Months",
      "step": 1
    },
    "sources": {
      "raster": {
        "type": "GdalSource",
        "params": {
          "dataset": {
            "type": "internal",
            "datasetId": "a626c880-1c41-489b-9e19-9596d129859c"
          }
        }
      }
    }
  }
}
```
