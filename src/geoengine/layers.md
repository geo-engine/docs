# Layers

A layer is a browsable unit in Geo Engine.
In general, it is a named [`Workflow`](../api/workflows.md) with additional meta information like a description and a default [`Colorizer`](../datatypes/colorizer.md).
Layers are identified by a `LayerId`, which is usually a UUID.
They can also be grouped inside a [`Collection`](./collections.md).

## Browsing

Inside Geo Engine's web interface, you can browse the available layers when adding data.

Inside Python, you can use the

```python
ge.layer_collection()
```

function to get a list of the root collection which contains paths to all underlying data.
