# PieChart

The `PieChart` is a _plot operator_ that computes a pie chart for a given vector dataset.
Moreover, the operator considers all data in the given query rectangle.

There are multiple variants on how to compute the pies.
In addition, it is possible to compute a donut chart instead of a standard pie chart.

### Parameter

| Parameter    | Type           | Description                                              | Example Value |
| ------------ | -------------- | -------------------------------------------------------- | ------------- |
| `type`       | One of `count` | The type of aggregation that is used to create the pies. | `"count"`     |
| `columnName` | `String`       | The names of the attribute to generate pies for.         | `"name"`      |

### Type

The `type` parameter can be one of the following values:

- `count`: Creates one pie for each distinct value in the given column `columnName`.
  Then, it counts the number of values.

## Inputs

The operator consumes exactly one _vector_ operator.

| Parameter | Type                 |
| --------- | -------------------- |
| `vector`  | `SingleVectorSource` |

## Errors

The operator returns an error in the following cases.

- The `attribute` for the given `columnName` does not exist.
- Number of pies: If the number of pies is greater than `32`, the operator returns an error.

## Notes

If the attribute has a [`Measurement`](/datatypes/measurement.html#classification) of type `Classification`, the operator uses the class name instead of the raw value.

## Example JSON

```json
{
  "type": "PieChart",
  "params": {
    "type": "count",
    "columnName": "name",
    "donut": false
  },
  "sources": {
    "source": {
      "type": "OgrSource",
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
