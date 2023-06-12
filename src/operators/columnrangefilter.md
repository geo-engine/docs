# ColumnRangeFilter

The `ColumnRangeFilter` operator allows filtering `FeatureCollection`s.
Users can define one or more data ranges for a column in the data table that is then filtered.
The filter can be used for numerical as well as textual columns.
Each range is inclusive, i.e., `[start, end]` includes as well the `start` as the `end`.

For instance, you can filter a collection to only include column values that are either in the range 0-10 or 20-30.
Moreover, you can specify the range `a` to `k` to dismiss all column values that start with larger letters in the alphabet.

## Parameters

| Parameter   | Type                                   | Description                                                                                 | Example Value              |
| ----------- | -------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------- |
| `column`    | string                                 | a column name of the `FeatureCollection`                                                    | <pre>"precipitation"</pre> |
| `ranges`    | List of either string or number ranges | one or more ranges of either strings or numbers; each range works as an _or_ for the filter | <pre>[[42,43]]</pre>       |
| `keepNulls` | boolean                                | should null values be kept or discarded?                                                    | <pre>true</pre>            |

## Inputs

The `ColumnRangeFilter` operator expects exactly one _vector_ input.

| Parameter | Type                 |
| --------- | -------------------- |
| `vector`  | `SingleVectorSource` |

## Errors

If the value in the `column` parameter is not a column of the feature collection, an error is thrown.

## Example JSON

```json
{
  "type": "ColumnRangeFilter",
  "params": {
    "column": "population",
    "ranges": [[1000, 10000]],
    "keepNulls": false
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

```json
{
  "type": "ColumnRangeFilter",
  "params": {
    "column": "name",
    "ranges": [
      ["a", "k"],
      ["v", "z"]
    ],
    "keepNulls": false
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
