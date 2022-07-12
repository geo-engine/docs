# MeanRasterPixelValuesOverTime

The `MeanRasterPixelValuesOverTime` is a _plot operator_ that computes a time series plot of mean raster values.
For each time step in the raster time series, it computes one mean value.
The output is a plot in Vega-Lite specification.

For instance, you want to plot the mean temperature of a monthly raster time series.
Then, you can use this operator to generate a time series plot.

## Parameters

| Parameter      | Type                                | Description                                                                                         | Example Value |
| -------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------- | ------------- |
| `timePosition` | string (`start`, `center` or `end`) | Where should the x-axis (time) tick be positioned? At either time start, time end or in the center. | `"start"`     |
| `area`         | (Optional) `boolean`                | Whether to fill the area under the curve. Defaults to `true`.                                       | `false`       |

## Inputs

The operator consumes exactly one _raster_ operator.

| Parameter | Type                 |
| --------- | -------------------- |
| `raster`  | `SingleRasterSource` |

## Example JSON

```json
{
  "type": "MeanRasterPixelValuesOverTime",
  "params": {
    "timePosition": "start",
    "area": true
  },
  "sources": {
    "raster": {
      "type": "GdalSource",
      "params": {
        "data": {
          "type": "internal",
          "datasetId": "a626c880-1c41-489b-9e19-9596d129859c"
        }
      }
    }
  }
}
```
