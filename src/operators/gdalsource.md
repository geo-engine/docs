# GdalSource

The `GdalSource` is a _source operator_ that reads raster data using GDAL.
The counterpart for vector data is the [`OgrSource`](./ogrsource.md).

## Parameters

| Parameter | Type     | Description                     | Example Value                  | Default Value |
| --------- | -------- | ------------------------------- | ------------------------------ | ------------- |
| `data`    | `DataId` | The id of the data to be loaded | <pre><code>"ndvi"</code></pre> |               |

## Inputs

None

## Errors

If the given dataset does not exist or is not readable, an error is thrown.

## Example JSON

```json
{
  "type": "GdalSource",
  "params": {
    "data": "ndvi"
  }
}
```
