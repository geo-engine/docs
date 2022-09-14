# OgrSource

The `OgrSource` is a _source operator_ that reads vector data using OGR.
The counterpart for raster data is the [`GdalSource`](./gdalsource.md).

## Parameters

| Parameter             | Type                     | Description                                                                                                                            | Example Value                                                                                                                       | Default Value |
| --------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `data`                | `DataId`                 | The id of the data to be loaded                                                                                                        | <pre><code>{<br>&nbsp;&nbsp;"type": "internal",<br>&nbsp;&nbsp;"datasetId": "e977b123-ca47-4c5b-aace-481119826aaf"<br>}</code></pre> |               |
| `attributeProjection` | `Array<String>`          | (Optional) The list of attributes to load. If nothing is specified, all attributes will be loaded.                                     | <code>["name", "population"]</code>                                                                                                 |               |
| `attributeFilters`    | `Array<AttributeFilter>` | (Optional) The list of filters to apply on the attributes of features. Only the features that match all of the filters will be loaded. | <pre><code>[{"attribute": "population",<br> "ranges": [[1000, 10000]]<br>}]</code></pre>                                            |               |

## Types

The following describes the types used in the parameters.

### AttributeFilter

The `AttributeFilter` defines one or more ranges on the values of an attribute. The ranges include the lower and upper bounds of the range.

| Field       | Type                             | Description                                                                     |     |
| ----------- | -------------------------------- | ------------------------------------------------------------------------------- | --- |
| `attribute` | `String`                         | The name of the attribute to filter.                                            |     |
| `ranges`    | `Array<Array<String \| Number>>` | The list of ranges to filter.                                                   |     |
| `keepNulls` | `bool`                           | (Optional) Specifies whether to keep null/no data entries, defaults to `false`. |     |

## Inputs

None

## Errors

If the given dataset does not exist or is not readable, an error is thrown.

## Example JSON

```json
{
  "type": "OgrSource",
  "params": {
    "data": {
      "type": "internal",
      "datasetId": "e977b123-ca47-4c5b-aace-481119826aaf"
    },
    "attributeProjection": ["name", "population"],
    "attributeFilters": [
      {
        "attribute": "population",
        "ranges": [[1000, 10000]],
        "keepNulls": false
      }
    ]
  }
}
```
