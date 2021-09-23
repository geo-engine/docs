# GdalSource

The `GdalSource` is a _source operator_ that reads raster data using GDAL.
The counter part for vector data is the `OgrSource`.

## Parameters

| Parameter | Type        | Description                        | Example Value | Default Value |
| --------- | ----------- | ---------------------------------- | ------------- | ------------- |
| `dataset` | `DatasetId` | The id of the dataset to be loaded | <code>"{<br>&nbsp;&nbsp;"type": "internal",<br>&nbsp;&nbsp;"datasetId": "a626c880-1c41-489b-9e19-9596d129859c"<br>}</code> | |

## Inputs

None

## Errors

If the given dataset does not exist or is not readable, an error is thrown.

## Example JSON

```json
{
  "type": "GdalSource",
  "params": {
    "dataset": {
      "type": "internal",
      "datasetId": "a626c880-1c41-489b-9e19-9596d129859c"
    }
  }
}
```
