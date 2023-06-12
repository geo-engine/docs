# Statistics

The `Statistics` operator is a _plot operator_ that computes count statistics over

- a selection of numerical columns of a single vector dataset, or
- multiple raster datasets.

The output is a JSON description.

For instance, you want to get an overview of a raster data source.
Then, you can use this operator to get basic count statistics.

## Vector Data

In the case of vector data, the operator generates one statistic for each of the selected numerical attributes.
The operator returns an error if one of the selected attributes is not numeric.

### Parameter

| Parameter     | Type          | Description                                             | Example Value |
| ------------- | ------------- |---------------------------------------------------------| ------------- |
| `columnNames` | `Vec<String>` | The names of the attributes to generate statistics for. | `["x","y"]`   |

## Raster Data

For raster data, the operator generates one statistic for each input raster.

### Parameter

| Parameter       | Type          | Description                                                                                                                                                                                                                                                              | Example Value |
| --------------- | ------------- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ------------- |
| `columnNames`   | `Vec<String>` | _Optional_: An alias for each input source. The operator will automatically name the rasters `Raster-1`, `Raster-2`, ... if this parameter is empty. If aliases are given, the number of aliases must match the number of input rasters. Otherwise an error is returned. | `["A","B"]`.  |

## Inputs

The operator consumes exactly one _vector_ or multiple _raster_ operators.

| Parameter | Type                                 |
| --------- | ------------------------------------ |
| `source`  | `MultipleRasterOrSingleVectorSource` |

## Errors

The operator returns an error in the following cases.

- Vector data: The `attribute` for one of the given `columnNames` is not numeric.
- Vector data: The `attribute` for one of the given `columnNames` does not exist.
- Raster data: The length of the `columnNames` parameter does not match the number of input rasters.

## Example JSON

```json
{
  "type": "Statistics",
  "params": {
    "columnNames": ["A"]
  },
  "sources": {
    "source": [
      {
        "type": "GdalSource",
        "params": {
          "data": "ndvi"
        }
      }
    ]
  }
}
```

### Example Output

```json
{
  "A": {
    "valueCount": 6,
    "validCount": 6,
    "min": 1.0,
    "max": 6.0,
    "mean": 3.5,
    "stddev": 1.707
  }
}
```
