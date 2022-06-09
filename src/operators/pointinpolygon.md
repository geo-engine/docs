# PointInPolygon

The `PointInPolygon` operator filters point features of a (multi-)point collection with polygons.
In more detail, the points of each feature are checked against the polygons of the other collection.
If one or more point is included in any polygon's ring, the feature is included in the output.

For instance, you can filter tree features inside the polygons of a forest.
All features, that weren't inside any forest polygon, are considered either part of another forest or outliers and are thus removed.

## Parameters

The operator is parameterless.

## Inputs

The `PointInPolygon` operator expects two _vector_ inputs.

| Parameter  | Type                 |
| ---------- | -------------------- |
| `points`   | `SingleVectorSource` |
| `polygons` | `SingleVectorSource` |

## Errors

If the `points` vector input is not a (multi-)point feature collection, an error is thrown.

If the `polygons` vector input is not a (multi-)polygon feature collection, an error is thrown.

## Example JSON

```json
{
  "type": "PointInPolygon",
  "params": {},
  "sources": {
    "points": {
      "type": "OgrSource",
      "params": {
        "dataset": {
          "type": "internal",
          "datasetId": "e977b123-ca47-4c5b-aace-481119826aaf"
        },
        "attributeProjection": ["name", "population"]
      }
    },
    "polygons": {
      "type": "OgrSource",
      "params": {
        "dataset": {
          "type": "internal",
          "datasetId": "b6191257-6d61-4c6b-90a4-ebfb1b23899d"
        }
      }
    }
  }
}
```
