# VisualPointClustering

The `VisualPointClustering` is a clustering operator for point collections that removes clutter and preserves the spatial structure of the input.
The output is a point collection with a count and radius attribute.
The operator utilizes the input resolution of the query to determine when points, being displayed as circles, would overlap.
Moreover, it allows aggregating non-geo attributes to preserve the other columns of the input.
For more information on the algorithm, cf. the paper [Beilschmidt, C. et al.: A Linear-Time Algorithm for the Aggregation and Visualization of Big Spatial Point Data. SIGSPATIAL/GIS 2017: 73:1-73:4](https://doi.org/10.1145/3139958.3140037).

An exemplary use case for this operator is the visualization of point data in an online map application.
There, you can use this operator as the final step of the workflow to cluster the points and display them as circles.
These circles then pose a decluttered view of the data, e.g., via a WFS endpoint.

## Parameters

| Parameter          | Type                                                                                    | Description                                                                                                                                                                                                                     | Example Value                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `minRadiusPx`      | number                                                                                  | Minimum circle radius in screen pixels                                                                                                                                                                                          | <pre>10</pre>                                                                                                                                                                                                                                                                                                                                                                                                            |
| `deltaPx`          | number                                                                                  | Minimum circle to circle distance in screen pixels input                                                                                                                                                                        | <pre>1</pre>                                                                                                                                                                                                                                                                                                                                                                                                             |
| `radiusColumn`     | string                                                                                  | The new column name to store radius information in screen pixels                                                                                                                                                                | <pre>"\_\_radius"</pre>                                                                                                                                                                                                                                                                                                                                                                                                  |
| `countColumn`      | string                                                                                  | The new column name to store the number of points represented by each circle                                                                                                                                                    | <pre>"\_\_count"</pre>                                                                                                                                                                                                                                                                                                                                                                                                   |
| `columnAggregates` | Map from string to aggregate definition (one of `MeanNumber`, `StringSample` or `Null`) | Specify how miscellaneous columns should be aggregated. You can optionally set a new [`Measurement`](../datatypes/measurement.md). Otherwise, the [`Measurement`](../datatypes/measurement.md) is taken from the source column. | <pre><code>{<br>&nbsp;&nbsp;"foo": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"columnName": "numericColumn",<br>&nbsp;&nbsp;&nbsp;&nbsp;"aggregateType": "MeanNumber",<br>&nbsp;&nbsp;&nbsp;&nbsp;"measurement": { "type": "unitless" }<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;"bar": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"columnName": "textColumn",<br>&nbsp;&nbsp;&nbsp;&nbsp;"aggregateType": "StringSample"<br>&nbsp;&nbsp;}<br>}</code></pre> |

## Inputs

The `VisualPointClustering` operator expects exactly one _vector_ input that must be a point collection.

| Parameter | Type                 |
| --------- | -------------------- |
| `vector`  | `SingleVectorSource` |

## Errors

If the source value `vector` is not a point collection, an error is thrown.

If multiple columns in `columnAggregates` have the same names, an error is thrown.

## Example JSON

```json
{
  "type": "VisualPointClustering",
  "params": {
    "minRadiusPx": 8.0,
    "deltaPx": 1.0,
    "radiusColumn": "__radius",
    "countColumn": "__count",
    "columnAggregates": {
      "mean_population": {
        "columnName": "population",
        "aggregateType": "MeanNumber",
        "measurement": { "type": "unitless" }
      },
      "sample_names": {
        "columnName": "name",
        "aggregateType": "StringSample"
      }
    }
  },
  "sources": {
    "vector": {
      "type": "OgrSource",
      "params": {
        "data": "places",
        "attributeProjection": ["name", "population"]
      }
    }
  }
}
```
