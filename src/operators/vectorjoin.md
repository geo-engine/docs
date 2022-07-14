# VectorJoin

The `VectorJoin` operator allows combining multiple vector inputs into a single feature collection.
There are multiple join variants defined, which are described below.

For instance, you want to join tabular data to a point collection of buildings.
The point collection contains the geolocation of the buildings and their id.
The attribute data collection has the building id and the height information.
Combining the two feature collections leads to a single point collection with geolocation and height information.

## Parameters

| Parameter | Type                          | Description      | Example Value              |
| --------- | ----------------------------- | ---------------- | -------------------------- |
| `type`    | A value of `EquiGeoToData`, … | The type of join | <pre>"EquiGeoToData"</pre> |

### EquiGeoToData

| Parameter            | Type              | Description                                                                                                                                              | Example Value      |
| -------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `leftColumn`         | string            | The column name of the left input                                                                                                                        | <pre>"id"</pre>    |
| `rightColumn`        | string            | The column name of the right input                                                                                                                       | <pre>"id"</pre>    |
| `rightColumn_suffix` | (Optional) string | A value to suffix the right join column to avoid name clashes with the columns of the left input. If nothing is specified, the default value is `right`. | <pre>"right"</pre> |

## Inputs

The `VectorJoin` operator expects two _vector_ inputs.

| Parameter | Type                 |
| --------- | -------------------- |
| `left`    | `SingleVectorSource` |
| `right`   | `SingleVectorSource` |

## Errors

If the value in the `left` parameter is not a column of the left feature collection, an error is thrown.

If the value in the `right` parameter is not a column of the right feature collection, an error is thrown.

### EquiGeoToData

If the left input is not a geo data collection, an error is thrown.

If the right input is not a (non-geo) data collection, an error is thrown.

## Example JSON

```json
{
  "type": "VectorJoin",
  "params": {
    "type": "EquiGeoToData",
    "leftColumn": "id",
    "rightColumn": "id",
    "rightColumnSuffix": "_other"
  },
  "sources": {
    "points": {
      "type": "OgrSource",
      "params": {
        "data": {
          "type": "internal",
          "datasetId": "e977b123-ca47-4c5b-aace-481119826aaf"
        },
        "attributeProjection": ["name", "population"]
      }
    },
    "polygons": {
      "type": "OgrSource",
      "params": {
        "data": {
          "type": "internal",
          "datasetId": "b6191257-6d61-4c6b-90a4-ebfb1b23899d"
        }
      }
    }
  }
}
```
