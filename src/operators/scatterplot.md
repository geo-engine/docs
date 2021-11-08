# ScatterPlot

The `ScatterPlot` is a _plot operator_ that computes a scatter plot over two attributes of a vector dataset. 
Thereby, the operator considers all data in the given query rectangle.

In case of more than `500` points to plot, the representation changes from a regular scatter plot
to a 2D Histogram with buckets determined from the underlying data.

## Parameter

| Parameter   | Type     | Description                                                  | Example Value |
| ------------| -------- | ------------------------------------------------------------ | ------------- |
| `columnX`   | `String` | The name of the attribute making up the x-axis of the plot.  | `"width"`     |
| `columnY`   | `String` | The name of the attribute making up the y-axis of the plot.  | `"height"`    |


## Inputs
The operator consumes exactly one _vector_ operator.

| Parameter | Type                 |
| --------- | -------------------- |
| `source`  | `SingleVectorSource` |

## Errors

The operator returns an error if one of the selected columns does not exist or is not numeric.

## Notes

If your dataset contains `infinite` or `NAN` values, they are ignored for the computation. Moreover, if 
your dataset contains more than `10.000` values, the buckets of the histogram are generated based on
those `10.000`values. Later values outside those bounds are ignored. 

## Example JSON
```json
{
  "type": "ScatterPlot",
  "params": {
    "columnX": "width",
    "columnY": "height"
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