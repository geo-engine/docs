# TimeProjection

The `TimeProjection` projects vector dataset timestamps to new granularities and ranges.
The output is a new vector dataset with the same geometry and attributes as the input.
However, each time step is projected to a new time range.
Moreover, the [`QueryRectangle`'s](./../datatypes/queryrectangle.md) temporal extent is enlarged as well to include the projected time range.

An example usage scenario is to transform snapshot observations into yearly time slices.
For instance, animal occurrences are observed at a daily granularity.
If you want to aggregate the data to a yearly granularity, you can use the `TimeProjection` operator.
This will change the validity of each element in the dataset to the full year where it was observed.
This is, for instance, useful when you want to combine it with raster time series and use different temporal semantics than the originally recorded validities.

## Parameters

| Parameter       | Type                                         | Description                                    | Example Value                                                                                  |
| --------------- | -------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `step`          | [`TimeStep`](/datatypes/timestep.md)         | time granularity and size for the projection   | <pre><code>{<br>&nbsp;&nbsp;"granularity": "years",<br>&nbsp;&nbsp;"step": 1<br>}</code></pre> |
| `stepReference` | [`TimeInstance`](/datatypes/timeinstance.md) | (Optional) an anchor point for the time `step` | <pre>"2010-01-01T00:00:00Z"</pre>                                                              |

## Inputs

The `TimeProjection` operator expects exactly one _vector_ input.

| Parameter | Type                 |
| --------- | -------------------- |
| `vector`  | `SingleVectorSource` |

## Errors

If the `step` is negative, an error is thrown.

## Example JSON

```json
{
  "type": "TimeProjection",
  "params": {
    "step": {
      "granularity": "years",
      "step": 1
    }
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
