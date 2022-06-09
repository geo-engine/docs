# Histogram

The `Histogram` is a _plot operator_ that computes a histogram plot either over attributes of a vector dataset or values of a raster source.
The output is a plot in Vega-Lite specification.

For instance, you want to plot the data distribution of numeric attributes of a feature collection.
Then, you can use a histogram with a suitable number of buckets to visualize and assess this.

## Parameters

| Parameter     | Type                                                    | Description                                                                                           | Example Value                                                                                 |
| ------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `columnName`  | `string`, ignored for raster input                      | The name of the attribute making up the x-axis of the histogram.                                      | `"temperature"`                                                                               |
| `bounds`      | `HistogramBounds` (either `Data` or specified `Values`) | If `Data`, it computes the bounds of the underlying data. If `Values`, one can specify custom bounds. | <pre><code>{<br>&nbsp;&nbsp;"min": 0.0,<br>&nbsp;&nbsp;"max": 20.0<br>}</code></pre> `"data"` |
| `buckets`     | (Optional) number                                       | The number of buckets.                                                                                | `20`                                                                                          |
| `interactive` | (Optional) `boolean`                                    | Flag, if the histogram should have user interactions for a range selection.                           | `true`                                                                                        |

## Inputs

The operator consumes exactly one _vector_ operator.

| Parameter | Type                         |
| --------- | ---------------------------- |
| `source`  | `SingleRasterOrVectorSource` |

## Errors

The operator returns an error if the selected column (`columnName`) does not exist or is not numeric.

## Notes

If `bounds` or `buckets` are unset, the operator needs to process the data twice to compute these values.

If the `buckets` parameter is unset, the operator estimates it using the square root of the number of elements in the data.

## Example JSON

```json
{
  "type": "Histogram",
  "params": {
    "columnName": "foobar",
    "bounds": {
      "min": 5.0,
      "max": 10.0
    },
    "buckets": 15,
    "interactive": false
  },
  "sources": {
    "vector": {
      "type": "OgrSource",
      "params": {
        "dataset": {
          "type": "internal",
          "datasetId": "a626c880-1c41-489b-9e19-9596d129859c"
        }
      }
    }
  }
}
```