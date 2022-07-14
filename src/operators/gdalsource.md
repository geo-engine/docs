# GdalSource

The `GdalSource` is a _source operator_ that reads raster data using GDAL.
The counterpart for vector data is the [`OgrSource`](./ogrsource.md).

## Parameters

| Parameter | Type     | Description                     | Example Value                                                                                                                        | Default Value |
| --------- | -------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| `data`    | `DataId` | The id of the data to be loaded | <pre><code>{<br>&nbsp;&nbsp;"type": "internal",<br>&nbsp;&nbsp;"datasetId": "a626c880-1c41-489b-9e19-9596d129859c"<br>}</code></pre> |               |

## Inputs

None

## Errors

If the given dataset does not exist or is not readable, an error is thrown.

## Example JSON

```json
{
  "type": "GdalSource",
  "params": {
    "data": {
      "type": "internal",
      "datasetId": "a626c880-1c41-489b-9e19-9596d129859c"
    }
  }
}
```
