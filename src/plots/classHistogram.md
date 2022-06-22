# ClassHistogram

The `ClassHistogram` is a _plot operator_ that computes a histogram plot either over categorical attributes of a vector dataset or categorical values of a raster source.
The output is a plot in [Vega-Lite](https://vega.github.io/vega-lite/) specification.

For instance, you want to plot the frequencies of the classes of a categorical attribute of a feature collection.
Then you can use a class histogram to visualize and assess this.

## Parameters

| Parameter    | Type                | Description                                                                                                                     | Example Value   |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `columnName` | `string` (optional) | The name of the attribute making up the x-axis of the histogram. Must be set for a vector sources, must not be set for rasters. | `"temperature"` |

## Inputs

The operator consumes either one _vector_ or one _raster_ operator.

| Parameter | Type                         |
| --------- | ---------------------------- |
| `source`  | `SingleRasterOrVectorSource` |

## Errors

The operator returns an error if…

- the selected column (`columnName`) does not exist or is not numeric,
- the source is a raster and the property `columnName` is set, or
- the input [`Measurement`](../datatypes/measurement.md) is not categorical.

The operator returns an error if

## Notes

The operator only uses values of the categorical [`Measurement`](../datatypes/measurement.md).
It ignores missing or no-data values and values that are not covered by the [`Measurement`](../datatypes/measurement.md).

## Example JSON

```json
{
  "type": "ClassHistogram",
  "params": {
    "columnName": "foobar"
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
