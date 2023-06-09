# LineSimplification

The `LineSimplification` operator allows simplifying `FeatureCollection`s of (multi-)lines or (multi-)polygons by removing vertices.
Users can select a simplification algorithm and specify an `epsilon` for parametrization.
Alternatively, they can omit the `epsilon`, which results in the `epsilon` being automatically determined by the query's spatial resolution.

For instance, you can remove the vertices of a large country polygon for drawing it on a small map.
This results in a simpler polygon that is easier to draw and reduces the amount of data that needs to be transferred.

## Parameters

| Parameter   | Type                              | Description                                                                                                                                                                                                                                 | Example Value               |
| ----------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `epsilon`   | (optional) number                 | Specify the parametrization of the simplification algorith, e.g. the distance threshold for two nodes in _Douglas-Peucker_. Must be > 0.                                                                                                    | <pre>1.0</pre>              |
| `algorithm` | `douglasPeucker` or `visvalingam` | Select a simplification algorith for being used, e.g. [Douglas-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) or [Visvalingam](https://en.wikipedia.org/wiki/Visvalingam%E2%80%93Whyatt_algorithm) | <pre>"douglasPeucker"</pre> |

## Inputs

The `LineSimplification` operator expects exactly one _vector_ input.

| Parameter | Type                 |
| --------- | -------------------- |
| `vector`  | `SingleVectorSource` |

## Errors

- If `epsilon` is set but <= 0, an error is thrown.
- If the input is not `MultiPolygon` or `MultiLineString`, an error is thrown.

## Example JSON

```json
{
  "type": "LineSimplification",
  "params": {
    "algorithm": "douglasPeucker",
    "epsilon": 1.0
  },
  "sources": {
    "vector": {
      "type": "OgrSource",
      "params": {
        "data": "ne_10m_admin_0_countries"
      }
    }
  }
}
```

```json
{
  "type": "LineSimplification",
  "params": {
    "algorithm": "visvalingam"
  },
  "sources": {
    "vector": {
      "type": "OgrSource",
      "params": {
        "data": "ne_10m_admin_0_countries"
      }
    }
  }
}
```
