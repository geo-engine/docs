# Statistics

The `Statistics` operator is a _plot operator_ that computes count statistics of a _raster_ source.
The output is a JSON description.

For instance, you want to get an overview of the raster data source.
Then, you can use this operator to get basic count statistics.

## Parameters

This operator is parameterless.

## Inputs

The operator consumes one or more _raster_ operators.

| Parameter | Type                    |
| --------- | ----------------------- |
| `rasters` | `MultipleRasterSources` |

## Example JSON

```json
{
  "type": "Statistics",
  "params": {},
  "sources": {
    "rasters": [
      {
        "type": "GdalSource",
        "params": {
          "dataset": {
            "type": "internal",
            "datasetId": "a626c880-1c41-489b-9e19-9596d129859c"
          }
        }
      }
    ]
  }
}
```

### Example Output

```json
[
  {
    "pixelCount": 6,
    "nanCount": 0,
    "min": 1.0,
    "max": 6.0,
    "mean": 3.5,
    "stddev": 1.707
  }
]
```
