# Histogram

The `Histogram` is a _plot operator_ that computes a histogram plot either over attributes of a vector dataset or values of a raster source.
The output is a plot in [Vega-Lite](https://vega.github.io/vega-lite/) specification.

For instance, you want to plot the data distribution of numeric attributes of a feature collection.
Then you can use a histogram with a suitable number of buckets to visualize and assess this.

## Parameters

| Parameter     | Type                                                    | Description                                                                                           | Example Value                                                                                 |
| ------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `columnName`  | `string`, ignored for raster input                      | The name of the attribute making up the x-axis of the histogram.                                      | `"temperature"`                                                                               |
| `bounds`      | `HistogramBounds` (either `data` or specified `values`) | If `data`, it computes the bounds of the underlying data. If `values`, one can specify custom bounds. | <pre><code>{<br>&nbsp;&nbsp;"min": 0.0,<br>&nbsp;&nbsp;"max": 20.0<br>}</code></pre> `"data"` |
| `buckets`     | `Number` or `SquareRootChoiceRule`                      | The number of buckets. The value can be specified or calculated.                                      | <pre><code>{<br>&nbsp;&nbsp;"type": "number",<br>&nbsp;&nbsp;"value": 20<br>}</code></pre>    |
| `interactive` | (Optional) `boolean`                                    | Flag, if the histogram should have user interactions for a range selection. It is `false` by default. | `true`                                                                                        |

## Inputs

The operator consumes either one _vector_ or one _raster_ operator.

| Parameter | Type                         |
| --------- | ---------------------------- |
| `source`  | `SingleRasterOrVectorSource` |

## Errors

The operator returns an error if the selected column (`columnName`) does not exist or is not numeric.

## Notes

If `bounds` or `buckets` are not defined, the operator will determine these values by itself which requires processing the data twice.

If the `buckets` parameter is set to `squareRootChoiceRule`, the operator estimates it using the square root of the number of elements in the data.

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
    "buckets": {
      "type": "number",
      "value": 15
    },
    "interactive": false
  },
  "sources": {
    "vector": {
      "type": "OgrSource",
      "params": {
        "data": "ndvi"
      }
    }
  }
}
```
