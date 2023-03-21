# Datasets

A dataset is a loadable unit in Geo Engine.
It is a parameter of a source operator (e.g., a [`GdalSource`](../operators/gdalsource.md)) and identifies the data that is loaded.
Geo Engine supports different types of datasets, reflected by a `DataId`, which are internal and external data.

# Internal dataset

An internal dataset is a dataset that is stored in the Geo Engine.
Thus, it is efficiently accessible and can be used in workflows.
The dataset is identified by a `DatasetId` and contains a `DatasetDefinition` that describes the data.
The `DatasetId` is usually a UUID.

# External dataset

An external dataset is a dataset that is not stored in the Geo Engine.
Geo Engine accesses it from a foreign location.
The dataset is identified by an `ExternalDataId` that consists of a `DatasetProviderId` and a `LayerId`.
While the `DatasetProviderId` is usually a UUID that identifies the data provider for Geo Engine itself, the `LayerId` is a string that identifies the layer in the data provider.
