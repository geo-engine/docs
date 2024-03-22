# RasterVectorJoin

The `RasterVectorJoin` operator allows combining a single vector input and multiple raster inputs.
For each raster input, a new column is added to the collection from the vector input.
The new column contains the value of the raster at the location of the vector feature.
For features covering multiple pixels like `MultiPoints` or `MultiPolygons`, the value is calculated using an aggregation function selected by the user.
The same is true if the temporal extent of a vector feature covers multiple raster time steps.
More details are described below.

**Example**:
You have a collection of agricultural fields (`Polygons`) and a collection of raster images containing each pixel's monthly NDVI value.
For your application, you want to know the NDVI value of each field.
The `RasterVectorJoin` operator allows you to combine the vector and raster data and offers multiple spatial and temporal aggregation strategies.
For example, you can use the `first` aggregation function to get the NDVI value of the first pixel that intersects with each field.
This is useful for exploratory analysis since the computation is very fast.
To calculate the mean NDVI value of all pixels that intersect with the field you should use the `mean` aggregation function.
Since the NDVI data is a monthly time series, you have to specify the temporal aggregation function as well.
The default is `none` which will create a new feature for each month.
Other options are `first` and `mean` which will calculate the first or mean NDVI value for each field over time.

## Inputs

The `RasterVectorJoin` operator expects one _vector_ input and one or more _raster_ inputs.

| Parameter | Type                                |
| --------- | ----------------------------------- |
| `sources` | `SingleVectorMultipleRasterSources` |

## Parameters

The `RasterVectorJoin` operator has the following parameters:

| Parameter                         | Type                      | Description                                                                         | Example Value                   |
| --------------------------------- | ------------------------- | ----------------------------------------------------------------------------------- | ------------------------------- |
| `names`                           | `ColumnNames`             | Specify how the new column names are derived from the raster band names.            | <pre>"{"type": "default}"</pre> |
| `featureAggregation`              | `first` or `mean`         | The aggregation function to use for features covering multiple pixels.              | <pre>"first"</pre>              |
| `featureAggregationIgnoreNoData`  | (optional) `boolean`      | Whether to ignore no data values in the aggregation. Defaults to `false`            | <pre>false</pre>                |
| `temporalAggregation`             | `none`, `first` or `mean` | The aggregation function to use for features covering multiple (raster) time steps. | <pre>"none"</pre>               |
| `temporalAggregationIgnoreNoData` | (optional) `boolean`      | Whether to ignore no data values in the aggregation. Defaults to `false`            | <pre>false</pre>                |

## Types

### ColumnNames

The `ColumnNames` type is used to specify how the new column names are derived from the raster band names.

| Value                                    | Description                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------- |
| `{"type": "default"}`                    | Appends " (n)" to the band name with the smallest `n` that avoids a conflict |
| `{"type": "suffix", "values": [string]}` | Specifies a suffix for each input, to be appended to the band names          |
| `{"type": "rename", "values": [string]}` | A list of names for each new column                                          |

## Errors

If the length of `names` is not equal to the number of raster inputs, an error is thrown.

## Example JSON

```json
{
  "type": "RasterVectorJoin",
  "params": {
    "names": ["NDVI"],
    "featureAggregation": "first",
    "temporalAggregation": "mean",
    "temporalAggregationIgnoreNoData": true
  },
  "sources": {
    "vector": {
      "type": "OgrSource",
      "params": {
        "data": "places"
      }
    },
    "rasters": [
      {
        "type": "GdalSource",
        "params": {
          "data": "ndvi"
        }
      }
    ]
  }
}
```
