# RasterVectorJoin

The `RasterVectorJoin` operator allows combining a single vector input and multiple raster inputs.
For each raster input, a new column is added to the collection from the vector input.
The new column contains the value of the raster at the location of the vector feature.
For features covering multiple pixels like `MultiPoints` or `MultiPolygons`, the value is calculated using an aggregation function selected by the user.
The same is true if the temporal extend of a vector feature covers multiple raster time-steps.
More details are described below.

**Example**:
You have a collection of aggricaltural fields (`Polygons`) and a collection of raster images containing the monthly NDVI value for each pixel.
The `RasterVectorJoin` operator allows you to do this.
You now have multiple options to calculate the NDVI value for each field.
For a quick evaluation, you can use the `first` aggregation function.
This will simply use the first value of the NDVI raster that intersects with the field.
The second option is to use the `mean` aggregation function.
This will calculate the mean NDVI value of all pixels that intersect with the field.
Since the NDVI data is monthly, you have to specify the temporal aggregation function as well.
The default is `none` which will create a new feature for each month.
Other options are `first` and `mean` which will calculate the first or mean NDVI value for each field over time.

## Inputs

The `RasterVectorJoin` operator expects one _vector_ input and one or more _raster_ inputs.

| Parameter | Type                                |
| --------- | ----------------------------------- |
| `sources` | `SingleVectorMultipleRasterSources` |

## Parameters

The `RasterVectorJoin` operator has the following parameters:

| Parameter             | Type                      | Description                                                                         | Example Value                      |
| --------------------- | ------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------- |
| `names`               | `Array<String>`           | Each name reflects the output column of the join result.                            | <pre>"["NDVI", "Elevation"]"</pre> |
| `featureAggregation`  | `first` or `mean`         | The aggregation function to use for features covering multiple pixels.              | <pre>"first"</pre>                 |
| `temporalAggregation` | `none`, `first` or `mean` | The aggregation function to use for features covering multiple (raster) time steps. | <pre>"none"</pre>                  |

## Errors

If the lenght of `names` is not equal to the number of raster inputs, an error is thrown.

## Example JSON

```json
{
  "type": "RasterVectorJoin",
  "params": {
    "names": ["NDVI"],
    "featureAggregation": "first",
    "temporalAggregation": "mean"
  },
  "sources": {
    "vector": {
      "type": "OgrSource",
      "params": {
        "data": {
          "type": "internal",
          "datasetId": "e977b123-ca47-4c5b-aace-481119826aaf"
        }
      }
    },
    "rasters": [
      {
        "type": "GdalSource",
        "params": {
          "data": {
            "type": "internal",
            "datasetId": "b6191257-6d61-4c6b-90a4-ebfb1b23899d"
          }
        }
      }
    ]
  }
}
```
