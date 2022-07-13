# BoxPlot

The `BoxPlot` is a _plot operator_ that computes a box plot over

- a selection of numerical columns of a single vector dataset, or
- multiple raster datasets.

Thereby, the operator considers all data in the given query rectangle.

The boxes of the plot span the 1st and 3rd quartile and highlight the median. The whiskers indicate the minimum and maximum values of the corresponding attribute or raster.

## Vector Data

In the case of vector data, the operator generates one box for each of the selected numerical attributes.
The operator returns an error if one of the selected attributes is not numeric.

### Parameter

| Parameter     | Type          | Description                                        | Example Value |
| ------------- | ------------- | -------------------------------------------------- | ------------- |
| `columnNames` | `Vec<String>` | The names of the attributes to generate boxes for. | `["x","y"]`   |

## Raster Data

For raster data, the operator generates one box for each input raster.

### Parameter

| Parameter       | Type          | Description                                                                                                                                                                                                                                                            | Example Value |
| --------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `columnNames`   | `Vec<String>` | _Optional_: An alias for each input source. The operator will automatically name the boxes `Raster-1`, `Raster-2`, ... if this parameter is empty. If aliases are given, the number of aliases must match the number of input rasters. Otherwise an error is returned. | `["A","B"]`.  |

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

## Notes

If your dataset contains `infinite` or `NAN` values, they are ignored for the computation. Moreover, if your dataset contains more than `10.000`values (which is likely for rasters),
the median and quartiles are estimated using the P^2 algorithm described in:

R. Jain and I. Chlamtac, The P^2 algorithm for dynamic calculation of quantiles and
histograms without storing observations, Communications of the ACM,
Volume 28 (October), Number 10, 1985, p. 1076-1085.
<https://www.cse.wustl.edu/~jain/papers/ftp/psqr.pdf>

## Example JSON

### Vector

```json
{
  "type": "BoxPlot",
  "params": {
    "columnNames": ["x", "y"]
  },
  "sources": {
    "source": {
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

### Raster

```json
{
  "type": "BoxPlot",
  "params": {
    "columnNames": ["A", "B"]
  },
  "sources": {
    "source": [
      {
        "type": "GdalSource",
        "params": {
          "dataset": {
            "type": "internal",
            "datasetId": "a626c880-1c41-489b-9e19-9596d129859c"
          }
        }
      },
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
